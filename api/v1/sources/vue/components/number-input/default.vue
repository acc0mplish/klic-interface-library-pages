<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="number-input" class="kn-number-input">
    <label for="export-number-input-default-quantity" data-part="label">
      참여 인원
    </label>
    <div data-part="number-input">
      <button type="button" data-cmp-action="decrement" aria-label="인원 줄이기" data-part="btn" class="kv-neutral kv-sm">
        −
      </button>
      <input id="export-number-input-default-quantity" type="number" min="1" max="20" value="4" data-number data-part="input">
      <button type="button" data-cmp-action="increment" aria-label="인원 늘리기" data-part="btn" class="kv-neutral kv-sm">
        +
      </button>
    </div>
    <p data-part="hint">
      최소 1명 · 최대 20명
    </p>
  </div>
</template>
