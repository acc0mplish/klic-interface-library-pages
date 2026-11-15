<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bar-chart" data-kv-variant="grouped" data-klic-component="bar-chart" class="kn-bar-chart">
    <header data-part="heading">
      <strong>
        분기별 달성
      </strong>
      <p data-part="muted">
        진한 막대: 실적 · 옅은 막대: 목표
      </p>
    </header>
    <div data-part="bars bars-grouped">
      <div>
        <strong>
          1분기
        </strong>
        <div>
          <span style="height:40px" title="실적 40" data-part="bar">
          </span>
          <span style="height:80px" title="목표 80" data-part="bar bar-light">
          </span>
        </div>
        <small>
          40 / 80
        </small>
      </div>
      <div>
        <strong>
          2분기
        </strong>
        <div>
          <span style="height:62px" title="실적 62" data-part="bar">
          </span>
          <span style="height:80px" title="목표 80" data-part="bar bar-light">
          </span>
        </div>
        <small>
          62 / 80
        </small>
      </div>
      <div>
        <strong>
          3분기
        </strong>
        <div>
          <span style="height:78px" title="실적 78" data-part="bar">
          </span>
          <span style="height:80px" title="목표 80" data-part="bar bar-light">
          </span>
        </div>
        <small>
          78 / 80
        </small>
      </div>
    </div>
  </div>
</template>
