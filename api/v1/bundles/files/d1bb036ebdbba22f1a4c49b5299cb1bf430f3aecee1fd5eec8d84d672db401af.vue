<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="spinner" data-kv-variant="cancelable" data-klic-component="spinner" class="ku-spin kn-spinner">
    <div data-kv-loading data-part="loading-panel">
      <span aria-hidden="true" class="ku-spin" data-part="spinner">
      </span>
      <header data-part="heading">
        <strong>
          보고서를 생성하는 중
        </strong>
        <p data-part="muted">
          로컬 예제의 처리 상태입니다.
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="loading-cancel"  data-part="btn">
        처리 중단
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </div>
  </div>
</template>
