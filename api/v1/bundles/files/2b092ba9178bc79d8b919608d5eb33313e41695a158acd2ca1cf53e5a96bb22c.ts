import type {DefineComponent} from 'vue';
export type KlicBlockDensity='compact'|'normal'|'relaxed';
export interface KlicVueBlockProps{id:string;density?:KlicBlockDensity;mode?:'light'|'dark';showAvatars?:boolean;showProgressRings?:boolean;onDensityChange?:(density:KlicBlockDensity)=>void;class?:string;style?:Record<string,unknown>}
export interface KlicVueBlockRecord{id:string;title:string;category:string;implemented:true}
export declare const BLOCK_CATALOG:readonly KlicVueBlockRecord[];
export declare const Block:DefineComponent<KlicVueBlockProps>;
export declare function createBlock(id:string):DefineComponent<Omit<KlicVueBlockProps,'id'>>;
