import {
  Fragment,Suspense,defineAsyncComponent,defineComponent,getCurrentInstance,h,isVNode,
  nextTick,onScopeDispose,shallowRef,type Component,type Ref,
} from 'vue';
export {Fragment,Suspense} from 'vue';

type Effect=()=>void|(()=>void);
type HookSlot={kind:string;[key:string]:any};
type HookStore={cursor:number;hooks:HookSlot[];disposed:boolean;disposeRegistered:boolean};
const stores=new WeakMap<object,HookStore>();

function getStore(instance=getCurrentInstance()){
 if(!instance)throw new Error('Vue block hooks require an active Vue render instance.');
 let store=stores.get(instance);
 if(!store){
  store={cursor:0,hooks:[],disposed:false,disposeRegistered:false};stores.set(instance,store);
  instance.scope.run(()=>onScopeDispose(()=>{
   store!.disposed=true;
   for(const slot of store!.hooks)slot.cleanup?.();
  }));
 }
 return {instance,store};
}
function hookSlot<T extends HookSlot>(kind:string,create:(instance:NonNullable<ReturnType<typeof getCurrentInstance>>,index:number)=>T){
 const {instance,store}=getStore(),index=store.cursor++;
 let slot=store.hooks[index];
 if(!slot){slot=create(instance,index);store.hooks[index]=slot;}
 else if(slot.kind!==kind)throw new Error(`Vue block hook order changed at slot ${index}: ${slot.kind} → ${kind}`);
 return {instance,store,slot:slot as T,index};
}
export function beginReactHookRender(){const {store}=getStore();store.cursor=0;}
const sameDeps=(a:readonly unknown[]|undefined,b:readonly unknown[]|undefined)=>Boolean(a&&b&&a.length===b.length&&a.every((value,index)=>Object.is(value,b[index])));
function assignRef(target:any,value:any){if(typeof target==='function')target(value);else if(target&&typeof target==='object'){if('value'in target)target.value=value;else target.current=value;}}
function exposeProxy(target:()=>any){return new Proxy({}, {get(_object,key){const value=target();return value?.[key]??value?.$?.exposed?.[key];},set(_object,key,value){const current=target();if(current&&typeof current==='object'){current[key]=value;return true;}return false;}});}

export function useState<T>(initial:T|(()=>T)):[T,(value:T|((previous:T)=>T))=>void]{
 const {slot}=hookSlot('state',(instance,index)=>{
  const value=shallowRef(typeof initial==='function'?(initial as ()=>T)():initial) as Ref<T>;
  return {kind:'state',value,set:(next:T|((previous:T)=>T))=>{value.value=typeof next==='function'?(next as (previous:T)=>T)(value.value):next;},id:`${instance.uid}-${index}`};
 });
 return [slot.value.value,slot.set];
}

export function useReducer<S,A,I>(reducer:(state:S,action:A)=>S,initialArg:I,initializer?:(arg:I)=>S):[S,(action:A)=>void]{
 const {slot}=hookSlot('reducer',()=>{
  const state=shallowRef(initializer?initializer(initialArg):initialArg as unknown as S) as Ref<S>;
  const value:HookSlot={kind:'reducer',state,reducer,dispatch:(action:A)=>{value.state.value=value.reducer(value.state.value,action);}};
  return value;
 });
 slot.reducer=reducer;
 return [slot.state.value,slot.dispatch];
}

export function useRef<T>(initial:T):Ref<T>&{current:T}{
 const {slot}=hookSlot('ref',()=>({kind:'ref',value:shallowRef(initial)}));
 const value=slot.value as Ref<T>&{current:T};
 if(!Object.getOwnPropertyDescriptor(value,'current'))Object.defineProperty(value,'current',{enumerable:true,get:()=>value.value,set:next=>{value.value=next;}});
 return value;
}

export function useMemo<T>(factory:()=>T,deps?:readonly unknown[]):T{
 const {slot}=hookSlot('memo',()=>({kind:'memo',value:undefined,deps:undefined,initialized:false}));
 if(!slot.initialized||!deps||!sameDeps(slot.deps,deps)){slot.value=factory();slot.deps=deps?Array.from(deps):undefined;slot.initialized=true;}
 return slot.value;
}
export function useCallback<T extends (...args:any[])=>any>(callback:T,deps?:readonly unknown[]):T{return useMemo(()=>callback,deps);}
export function useId():string{const {slot}=hookSlot('id',(instance,index)=>({kind:'id',value:`klic-${instance.uid}-${index}`}));return slot.value;}
export function useDeferredValue<T>(value:T):T{return value;}
export function useSyncExternalStore<T>(subscribe:(onChange:()=>void)=>()=>void,getSnapshot:()=>T,_getServerSnapshot?:()=>T):T{
 const {slot}=hookSlot('external-store',()=>({kind:'external-store',value:shallowRef(getSnapshot()),subscribe:undefined as typeof subscribe|undefined,getSnapshot,unsubscribe:undefined as undefined|(()=>void)}));
 const snapshot=getSnapshot();if(!Object.is(slot.value.value,snapshot))slot.value.value=snapshot;
 slot.getSnapshot=getSnapshot;
 if(slot.subscribe!==subscribe){slot.cleanup?.();slot.subscribe=subscribe;const stop=subscribe(()=>{const next=slot.getSnapshot();if(!Object.is(slot.value.value,next))slot.value.value=next;});slot.unsubscribe=typeof stop==='function'?stop:undefined;slot.cleanup=()=>{slot.unsubscribe?.();slot.unsubscribe=undefined;};}
 return slot.value.value;
}

function effectHook(kind:string,effect:Effect,deps?:readonly unknown[]){
 const {instance,store,slot}=hookSlot(kind,()=>({kind,deps:undefined,initialized:false,effect,cleanup:undefined as undefined|(()=>void),version:0}));
 const changed=!slot.initialized||!deps||!sameDeps(slot.deps,deps);
 slot.effect=effect;
 if(!changed)return;
 slot.deps=deps?Array.from(deps):undefined;slot.initialized=true;const version=++slot.version;
 void nextTick().then(()=>{
  if(store.disposed||slot.version!==version||instance.isUnmounted)return;
  slot.cleanup?.();const cleanup=slot.effect();slot.cleanup=typeof cleanup==='function'?cleanup:undefined;
 });
}
export function useEffect(effect:Effect,deps?:readonly unknown[]){effectHook('effect',effect,deps);}
export function useLayoutEffect(effect:Effect,deps?:readonly unknown[]){effectHook('layout-effect',effect,deps);}
export function useImperativeHandle<T>(target:any,create:()=>T,deps?:readonly unknown[]){useEffect(()=>{const value=create();assignRef(target,value);return()=>assignRef(target,null);},deps);}

export function forwardRef(render:(props:any,ref:any)=>any){
 return defineComponent({name:render.name||'KlicForwardRef',inheritAttrs:false,setup(props,context){
  const handle={current:null as any};context.expose(exposeProxy(()=>handle.current));
  return()=>{beginReactHookRender();const input={...props,...context.attrs};if(context.slots.default)input.children=context.slots.default();return render(input,handle);};
 }});
}
export function memo<T>(component:T):T{return component;}
export function lazy(loader:()=>Promise<{default:Component}>){return defineAsyncComponent(loader);}

const toVueProps=(props:Record<string,any>)=>{
 const result={...props};if('className'in result){result.class=result.className;delete result.className;}if('htmlFor'in result){result.for=result.htmlFor;delete result.htmlFor;}
 if('defaultValue'in result){result.value=result.defaultValue;delete result.defaultValue;}if('defaultChecked'in result){result.checked=result.defaultChecked;delete result.defaultChecked;}delete result.children;
 return result;
};

/** Wrapper inserted around legacy function components; it runs their hooks in a Vue-owned render scope. */
export const ReactComponent=defineComponent({
 name:'KlicVueBlockComponent',inheritAttrs:false,
 props:{component:{type:[Function,Object] as any,required:true},vueComponent:{type:Boolean,default:false}},
 setup(props,context){
  const child=shallowRef<any>(null);context.expose(exposeProxy(()=>child.value?.current??child.value));
  return()=>{
   const component=props.component as any,attrs={...context.attrs};
   const children=context.slots.default?.();
   if(props.vueComponent||typeof component!=='function'){
    const childProps=toVueProps(attrs);return h(component,{...childProps,ref:child},context.slots);
   }
   if(children!==undefined&&attrs.children===undefined)attrs.children=children;
   beginReactHookRender();return component(attrs);
  };
 }
});

export const Children={
 toArray:(children:any)=>children==null?[]:Array.isArray(children)?children.flat(Infinity):[children],
 count:(children:any)=>children==null?0:Array.isArray(children)?children.flat(Infinity).length:1,
 map:(children:any,callback:(child:any,index:number)=>any)=>Children.toArray(children).map(callback),
 forEach:(children:any,callback:(child:any,index:number)=>void)=>Children.toArray(children).forEach(callback),
 only:(children:any)=>{const values=Children.toArray(children);if(values.length!==1)throw new Error('Children.only expected one child.');return values[0];},
};
export const isValidElement=isVNode;
const React={Fragment,Suspense,Children,isValidElement,createElement:h,useState,useReducer,useMemo,useCallback,useRef,useEffect,useLayoutEffect,useId,useDeferredValue,useSyncExternalStore,useImperativeHandle,forwardRef,memo,lazy};
export default React;
