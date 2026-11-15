<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="spinner" data-kv-variant="inline" data-klic-component="spinner" class="ku-spin kn-spinner">
    <header data-part="heading">
      <strong>
        데이터 동기화
      </strong>
    </header>
    <div class="ku-actions" data-part="actions">
      <span aria-hidden="true" class="ku-spin" data-part="spinner">
      </span>
      <strong role="status">
        데이터를 동기화하고 있습니다.
      </strong>
    </div>
    <p data-part="muted">
      잠시만 기다려 주세요. 예시 로딩 상태입니다.
    </p>
  </div>
</template>
