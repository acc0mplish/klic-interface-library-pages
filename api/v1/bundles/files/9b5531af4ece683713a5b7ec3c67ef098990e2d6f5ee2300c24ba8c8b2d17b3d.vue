<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="statistic" data-kv-variant="breakdown" data-klic-component="statistic" class="kn-statistic">
    <div data-part="metric">
      <span>
        전체 프로젝트
      </span>
      <strong>
        128
      </strong>
      <p data-part="muted">
        팀이 함께 만든 작업 공간
      </p>
    </div>
    <div class="ku-grid-2" data-part="grid-2">
      <div data-part="metric">
        <span>
          진행 중
        </span>
        <strong>
          84
        </strong>
        <p data-part="muted">
        </p>
      </div>
      <div data-part="metric">
        <span>
          완료
        </span>
        <strong>
          44
        </strong>
        <p data-part="muted">
        </p>
      </div>
    </div>
  </div>
</template>
