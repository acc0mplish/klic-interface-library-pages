import {createApp,h} from 'vue';
import {Block} from '../../packages/klic/src/blocks-vue';
import '../../block-runtime/src/index.css';

const id="hierarchy-tree-reorder";
createApp({render:()=>h(Block,{id,mode:'light'})}).mount('#app');
