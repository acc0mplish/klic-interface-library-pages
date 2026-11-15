<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="tooltip" class="kn-tooltip">
    <div data-part="tooltip-wrap">
      <button type="button" aria-describedby="export-tooltip-default-tip" data-part="btn" class="kv-neutral kv-sm">
        자동 저장 안내
      </button>
      <span id="export-tooltip-default-tip" role="tooltip">
        변경사항을 이 브라우저에 저장합니다.
      </span>
    </div>
    <p data-part="hint">
      포인터를 올리거나 Tab으로 확인하세요.
    </p>
  </div>
</template>
