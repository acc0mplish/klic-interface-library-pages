<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="statistic" data-kv-variant="target" data-klic-component="statistic" class="kn-statistic">
    <div data-part="metric">
      <span>
        월간 매출
      </span>
      <strong>
        ₩840만
      </strong>
      <p data-part="muted">
        목표 ₩1,000만
      </p>
    </div>
    <label data-part="progress-label">
      목표 달성률
      <span>
        84%
      </span>
      <progress max="100" value="84">
        84%
      </progress>
    </label>
    <p data-part="muted">
      목표까지 ₩160만 남았습니다.
    </p>
  </div>
</template>
