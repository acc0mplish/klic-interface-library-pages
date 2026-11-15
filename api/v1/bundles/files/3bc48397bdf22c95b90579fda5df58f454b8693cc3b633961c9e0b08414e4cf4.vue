<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="switch" data-kv-variant="choice-card" data-klic-component="switch" class="kn-switch">
    <label data-part="switch-card">
      <component :is="KlicIcons.MonitorSmartphone" data-part="icon" aria-hidden="true" />
      <strong>
        장치 간 동기화
      </strong>
      <span>
        이 계정으로 연결한 장치에서 작업 환경을 공유합니다.
      </span>
      <input type="checkbox" role="switch" aria-label="장치 간 동기화" data-part="checkbox">
    </label>
  </div>
</template>
