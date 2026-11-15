<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="slider" data-kv-variant="zoom" data-klic-component="slider" class="kn-slider">
    <label data-part="field">
      <span>
        확대 비율 (%)
      </span>
      <input type="range" value="100" min="75" max="150" step="5" data-kv-zoom data-part="slider">
    </label>
    <output data-part="output">
      100%
    </output>
    <div data-klic-surface="card" data-kv-zoom-target data-part="panel">
      읽기 편한 문서 미리 보기
    </div>
  </div>
</template>
