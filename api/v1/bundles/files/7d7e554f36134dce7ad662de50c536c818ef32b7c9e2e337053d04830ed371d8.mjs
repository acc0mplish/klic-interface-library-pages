import {onMounted} from 'vue';
import {initComponentInteractions} from './component-interactions.mjs';
export function useKlicNativeComponent(){onMounted(()=>initComponentInteractions());}
