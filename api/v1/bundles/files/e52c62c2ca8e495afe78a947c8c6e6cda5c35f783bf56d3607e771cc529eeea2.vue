<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="donut-chart" data-kv-variant="completion" data-klic-component="donut-chart" class="kn-donut-chart">
    <header data-part="heading">
      <strong>
        프로젝트 완료율
      </strong>
    </header>
    <div style="--kv-value:72" role="img" aria-label="완료율 72%" data-part="donut">
      <strong>
        72%
        <small>
          완료
        </small>
      </strong>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        완료 72건
      </span>
      <span>
        남은 작업 28건
      </span>
    </div>
  </div>
</template>
