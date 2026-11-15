<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="skeleton" class="kn-skeleton">
    <div data-skeleton aria-busy="true">
      <span data-part="visually-hidden" class="ku-visually-hidden">
        불러오는 중
      </span>
      <div data-part="skeleton skeleton-avatar">
      </div>
      <div data-part="skeleton">
      </div>
      <div data-part="skeleton short">
      </div>
    </div>
    <button type="button" data-cmp-action="load-skeleton"  data-part="btn" class="kv-neutral kv-sm">
      콘텐츠 불러오기
    </button>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
