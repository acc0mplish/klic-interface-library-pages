<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="toggle" class="kn-toggle">
    <div role="group" aria-label="텍스트 표시 옵션" data-part="button-row" class="ku-button-row">
      <button type="button" data-cmp-action="toggle" aria-pressed="false" data-part="btn" class="kv-neutral kv-sm">
        즐겨찾기
      </button>
    </div>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
