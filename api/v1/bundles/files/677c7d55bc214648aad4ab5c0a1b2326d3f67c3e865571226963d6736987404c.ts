import {Teleport,defineComponent,h,inject,nextTick,onBeforeUnmount,onMounted,provide,ref,shallowRef,type Component,type PropType,type Ref} from 'vue';

const dialogKey=Symbol('klic-dialog-controller');
type FocusTarget=string|HTMLElement|(()=>string|HTMLElement|null)|null;
interface DialogContext{
 controller:DialogController;
 titleId:string;
 descriptionId:string;
 restoreTarget:Ref<HTMLElement|null>;
}
export interface DialogController{open():Promise<void>;close():void;readonly isOpen:boolean;readonly __visible:Ref<boolean>}
let nextDialogId=0;

export function createDialogController():DialogController{
 const visible=ref(false);
 return {open:async()=>{visible.value=true;},close:()=>{visible.value=false;},get isOpen(){return visible.value;},__visible:visible};
}

const invoke=(handler:any,event:Event)=>{for(const callback of Array.isArray(handler)?handler:[handler])if(typeof callback==='function')callback(event);};
const focusableSelector='a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
const focusableElements=(root:HTMLElement)=>[...root.querySelectorAll<HTMLElement>(focusableSelector)].filter(element=>!element.hidden&&element.getAttribute('aria-hidden')!=='true'&&element.getAttribute('tabindex')!=='-1'&&(element as HTMLInputElement).type!=='hidden');
function focusElement(element:HTMLElement|null){
 if(!element||typeof element.focus!=='function')return;
 try{element.focus({preventScroll:true});}catch{element.focus();}
}
function resolveFocusTarget(target:FocusTarget|undefined,root:HTMLElement|null):HTMLElement|null{
 const resolved=typeof target==='function'?target():target;
 if(resolved==='content')return root;
 if(typeof resolved==='string')return root?.querySelector<HTMLElement>(resolved)??(typeof document==='undefined'?null:document.querySelector<HTMLElement>(resolved));
 return resolved&&typeof resolved==='object'&&typeof resolved.focus==='function'?resolved:null;
}
function useDialogContext(){return inject<DialogContext|null>(dialogKey,null);}
function useDialogClose(){const context=useDialogContext();return()=>context?.controller.close();}

export const Dialog=defineComponent({name:'KlicDialog',props:{controller:{type:Object as PropType<DialogController>,required:true}},setup(props,{slots}){
 const restoreTarget=shallowRef<HTMLElement|null>(null),prefix=`klic-vue-dialog-${++nextDialogId}`;
 provide(dialogKey,{controller:props.controller,titleId:`${prefix}-title`,descriptionId:`${prefix}-description`,restoreTarget});
 return()=>props.controller.__visible.value?h(Teleport,{to:'body'},h('div',{class:'klic-vue-dialog-layer',role:'presentation'},slots.default?.())):null;
}});

export const DialogBackdrop=defineComponent({name:'KlicDialogBackdrop',inheritAttrs:false,setup(_props,{attrs}){
 const close=useDialogClose();
 return()=>h('div',{...attrs,'aria-hidden':'true',onClick:(event:MouseEvent)=>{invoke(attrs.onClick,event);if(event.target===event.currentTarget)close();}});
}});

export const DialogContent=defineComponent({name:'KlicDialogContent',inheritAttrs:false,props:{initialFocus:{type:[String,Object,Function] as PropType<FocusTarget>,default:undefined},finalFocus:{type:[String,Object,Function] as PropType<FocusTarget>,default:undefined}},setup(props,{attrs,slots}){
 const context=useDialogContext(),content=shallowRef<HTMLElement|null>(null);
 onMounted(async()=>{
  const node=content.value;if(!node)return;
  if(context&&typeof document!=='undefined')context.restoreTarget.value=document.activeElement as HTMLElement|null;
  await nextTick();
  const target=resolveFocusTarget(props.initialFocus,node)??focusableElements(node)[0]??node;
  focusElement(target);
 });
 onBeforeUnmount(()=>{
  const target=resolveFocusTarget(props.finalFocus,content.value)??context?.restoreTarget.value??null;
  if(context)context.restoreTarget.value=null;
  void nextTick().then(()=>{if(target&&target.isConnected!==false)focusElement(target);});
 });
 const onKeydown=(event:KeyboardEvent)=>{
  invoke(attrs.onKeydown,event);
  if(event.defaultPrevented)return;
  const node=content.value;if(!node)return;
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();context?.controller.close();return;}
  if(event.key!=='Tab')return;
  const targets=focusableElements(node),active=typeof document==='undefined'?null:document.activeElement as HTMLElement|null;
  if(!targets.length){event.preventDefault();focusElement(node);return;}
  const first=targets[0],last=targets[targets.length-1],inside=active?node.contains(active):false;
  if(event.shiftKey&&(!inside||active===first)){event.preventDefault();focusElement(last);}
  else if(!event.shiftKey&&(!inside||active===last)){event.preventDefault();focusElement(first);}
 };
 return()=>h('div',{...attrs,ref:content,role:attrs.role||'dialog','aria-modal':attrs['aria-modal']??'true','aria-labelledby':attrs['aria-labelledby']??context?.titleId,'aria-describedby':attrs['aria-describedby']??context?.descriptionId,tabindex:attrs.tabindex??-1,onKeydown},slots.default?.());
}});

const textPart=(name:string,tag:string,label:'titleId'|'descriptionId'):Component=>defineComponent({name:`KlicDialog${name}`,inheritAttrs:false,setup(_props,{attrs,slots}){
 const context=useDialogContext();
 return()=>h(tag,{...attrs,id:attrs.id??context?.[label]},slots.default?.());
}});
export const DialogTitle=textPart('Title','h2','titleId');
export const DialogDescription=textPart('Description','p','descriptionId');
export const DialogClose=defineComponent({name:'KlicDialogClose',inheritAttrs:false,setup(_props,{attrs,slots}){
 const close=useDialogClose();
 return()=>h('button',{...attrs,onClick:(event:MouseEvent)=>{invoke(attrs.onClick,event);close();}},slots.default?.());
}});
