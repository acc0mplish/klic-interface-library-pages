import {createApp,h} from 'vue';
import {Block} from '../../packages/klic/src/blocks-vue';
import '../../block-runtime/src/index.css';

const id="stats-executive-kpi-strip";
createApp({render:()=>h(Block,{id,mode:'light'})}).mount('#app');
