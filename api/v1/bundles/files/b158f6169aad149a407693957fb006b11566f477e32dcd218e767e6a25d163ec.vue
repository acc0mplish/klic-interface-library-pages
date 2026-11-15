<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="banner" class="kn-banner">
    <div data-banner data-part="banner">
      <span>
        <component :is="KlicIcons.Sparkles" data-part="icon" aria-hidden="true" />
        컴포넌트 100종을 만나보세요.
      </span>
      <button type="button" data-cmp-action="dismiss-banner" aria-label="안내 배너 닫기" data-part="btn" class="kv-neutral kv-sm">
        ×
      </button>
    </div>
    <button type="button" data-cmp-action="show-banner"  data-part="btn" class="kv-neutral kv-sm">
      배너 다시 표시
    </button>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
