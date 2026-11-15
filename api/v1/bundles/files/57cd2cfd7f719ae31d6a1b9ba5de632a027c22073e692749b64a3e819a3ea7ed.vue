<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="range-slider" class="kn-range-slider">
    <fieldset data-part="options">
      <legend>
        예산 범위 · 만원
      </legend>
      <label for="export-range-slider-default-start" data-part="label">
        최소 예산
      </label>
      <input id="export-range-slider-default-start" type="range" min="0" max="100" value="20" data-range="start" data-part="slider">
      <label for="export-range-slider-default-end" data-part="label">
        최대 예산
      </label>
      <input id="export-range-slider-default-end" type="range" min="0" max="100" value="80" data-range="end" data-part="slider">
      <output data-range-result>
        20 — 80만원
      </output>
    </fieldset>
  </div>
</template>
