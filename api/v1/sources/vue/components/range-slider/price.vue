<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="range-slider" data-kv-variant="price" data-klic-component="range-slider" class="kn-range-slider">
    <div data-kv-range-pair>
      <header data-part="heading">
        <strong>
          가격 범위
        </strong>
        <p data-part="muted">
          단위: 만원
        </p>
      </header>
      <label data-part="field">
        <span>
          최소
        </span>
        <input type="range" min="0" max="100" value="20" data-kv-bound="min" data-part="slider">
        <output>
          20
        </output>
      </label>
      <label data-part="field">
        <span>
          최대
        </span>
        <input type="range" min="0" max="100" value="80" data-kv-bound="max" data-part="slider">
        <output>
          80
        </output>
      </label>
    </div>
  </div>
</template>
