<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="slider" data-kv-variant="opacity" data-klic-component="slider" class="kn-slider">
    <label data-part="field">
      <span>
        레이어 불투명도 (%)
      </span>
      <input type="range" value="80" min="10" max="100" data-kv-opacity data-part="slider">
    </label>
    <output data-part="output">
      80%
    </output>
    <div data-kv-opacity-target>
      <div role="img" aria-label="레이어 미리 보기" data-part="art">
        <span>
          KLIC
        </span>
        <strong>
          레이어 미리 보기
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
    </div>
  </div>
</template>
