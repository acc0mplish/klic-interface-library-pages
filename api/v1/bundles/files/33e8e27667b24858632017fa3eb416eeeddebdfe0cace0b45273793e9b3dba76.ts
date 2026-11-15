import {Fragment,defineComponent,h} from 'vue';
import {useEffect,useState} from './react-compat';

const motionElements=new Map<string,ReturnType<typeof defineComponent>>();
const motionElement=(tag:string)=>{
 let component=motionElements.get(tag);if(component)return component;
 component=defineComponent({name:`KlicMotion${tag}`,inheritAttrs:false,props:{layout:Boolean,layoutId:String,transition:Object,initial:[Object,String],animate:[Object,String],exit:[Object,String],variants:Object},setup(props,{attrs,slots}){
  return()=>{
   const target=props.animate&&typeof props.animate==='object'?props.animate as Record<string,unknown>:{};
   const style={...(attrs.style as Record<string,unknown>||{}),...(typeof target.opacity==='number'?{opacity:target.opacity}:{}),...(typeof target.y==='number'?{transform:`translateY(${target.y}px)`}:{})};
   const duration=Number((props.transition as any)?.duration);if(Number.isFinite(duration)&&duration>0)style.transition=`all ${duration*1000}ms ease`;
   const nextAttrs={...attrs,style,...(props.layoutId?{'data-motion-layout-id':props.layoutId}:{})};
   return h(tag,nextAttrs,slots.default?.());
  };
 }});
 motionElements.set(tag,component);return component;
};
export const motion=new Proxy({} as Record<string,ReturnType<typeof defineComponent>>,{get(_target,tag){return typeof tag==='string'?motionElement(tag):undefined;}});
export const LayoutGroup=defineComponent({name:'KlicMotionLayoutGroup',setup(_props,{slots}){return()=>h(Fragment,null,slots.default?.());}});
export function useReducedMotion(){
 const [reduced,setReduced]=useState(()=>typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{if(typeof matchMedia!=='function')return;const media=matchMedia('(prefers-reduced-motion: reduce)'),update=()=>setReduced(media.matches);update();media.addEventListener?.('change',update);return()=>media.removeEventListener?.('change',update);},[]);
 return reduced;
}
