import {computed,defineComponent,h,Suspense} from 'vue';
import type {CSSProperties} from 'vue';
import {createTokens,formatValue,resolveTokens} from '../../../../dist/tokens.mjs';
import blockData from '../../../../dist/blocks-data.json';
import BlockApp,{BLOCK_IDS} from '../../../../block-runtime/src/BlockApp';
import {ReactComponent} from '../../../../block-runtime-vue/src/compat/react-compat';

export interface KlicVueBlockProps{
 id:string;
 density?:'compact'|'normal'|'relaxed';
 mode?:'light'|'dark';
 showAvatars?:boolean;
 showProgressRings?:boolean;
 onDensityChange?:(density:'compact'|'normal'|'relaxed')=>void;
}

const validIds=new Set<string>(BLOCK_IDS);
export const BLOCK_CATALOG=Object.freeze(blockData.blocks.filter(block=>block.implemented).map(block=>({id:block.id,title:block.title,category:block.categoryId,implemented:true as const})));

export const Block=defineComponent({
 name:'KlicVueBlock',inheritAttrs:false,
 props:{id:{type:String,required:true},density:{type:String,default:'normal'},mode:{type:String,default:'light'},showAvatars:{type:Boolean,default:true},showProgressRings:{type:Boolean,default:true},onDensityChange:{type:Function,default:undefined}},
 setup(props,context){
  const variables=computed(()=>Object.fromEntries(Object.entries(resolveTokens(createTokens('a',props.mode,{density:props.density,colorTheme:'klic',material:'flat'}))).map(([key,value])=>['--'+key.replaceAll('.','-'),formatValue(value)])));
  const runtimeStyle=computed<CSSProperties>(()=>({
   ...variables.value,
   '--runtime-font':'KlicPretendard,system-ui,sans-serif',
   '--runtime-heading-font':'KlicPretendard,system-ui,sans-serif',
   '--runtime-text-scale':1,
   '--runtime-radius':'8px',
   '--runtime-icon-stroke':1.8,
   '--runtime-density-space':1,
   '--runtime-inverse-surface':variables.value[props.mode==='dark'?'--klic-component-block-color-soft':'--klic-component-block-color-text'],
   '--runtime-inverse-ink':variables.value[props.mode==='dark'?'--klic-component-block-color-text':'--klic-component-block-color-panel'],
   '--runtime-emphasis-ink':variables.value['--klic-component-block-color-on-accent'],
   '--runtime-muted-ink':variables.value['--klic-component-block-color-muted'],
   ...(context.attrs.style as CSSProperties||{}),
  }));
  return()=>{
   if(!validIds.has(props.id))return h('p',{role:'alert'},`Unknown KLIC block: ${props.id}`);
   return h('section',{
    ...context.attrs,
    'data-klic-block':props.id,
    'data-theme':props.mode,
    'data-density':props.density,
    'data-avatars':String(props.showAvatars),
    class:['runtime-surface',props.mode==='dark'?'dark':null,context.attrs.class],
    style:runtimeStyle.value,
   },[
    h(Suspense,{}, {default:()=>h(ReactComponent,{component:BlockApp,selectedId:props.id,density:props.density,theme:props.mode,showAvatars:props.showAvatars,showProgressRings:props.showProgressRings,onDensityChange:props.onDensityChange}),fallback:()=>h('p',{role:'status'},'Loading KLIC block…')}),
   ]);
  };
 },
});

export function createBlock(id:string){
 return defineComponent({
  name:`KlicVueBlock_${id.replace(/[^a-zA-Z0-9]/g,'_')}`,
  props:{density:{type:String,default:'normal'},mode:{type:String,default:'light'},showAvatars:{type:Boolean,default:true},showProgressRings:{type:Boolean,default:true},onDensityChange:{type:Function,default:undefined}},
  setup(props,context){return()=>h(Block,{...context.attrs,...props,id} as any,context.slots);},
 });
}
