import type {DefineComponent} from 'vue';
import type {KlicBlockDensity} from './blocks-vue.js';
export interface KlicVueBlockProps{density?:KlicBlockDensity;mode?:'light'|'dark';showAvatars?:boolean;showProgressRings?:boolean;onDensityChange?:(density:KlicBlockDensity)=>void;class?:string;style?:Record<string,unknown>}
declare const Block:DefineComponent<KlicVueBlockProps>;
export default Block;
