<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="button-group" class="kn-button-group">
    <div role="group" aria-label="문서 작업" data-part="button-group">
      <button type="button" data-cmp-action="menu-choice" data-name="저장" data-part="btn" class="kv-neutral kv-sm">
        저장
      </button>
      <button type="button" data-cmp-action="menu-choice" data-name="복제" data-part="btn" class="kv-neutral kv-sm">
        복제
      </button>
      <button type="button" data-cmp-action="menu-choice" data-name="공유" data-part="btn" class="kv-neutral kv-sm">
        공유
      </button>
    </div>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
