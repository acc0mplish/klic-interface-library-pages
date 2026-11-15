<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bar-chart" data-kv-variant="vertical" data-klic-component="bar-chart" class="kn-bar-chart">
    <header data-part="heading">
      <strong>
        월간 매출
      </strong>
      <p data-part="muted">
        단위: 만원
      </p>
    </header>
    <div data-part="bars">
      <div>
        <span>
          42
        </span>
        <span style="height:42px" data-part="bar">
        </span>
        <small>
          6월
        </small>
      </div>
      <div>
        <span>
          68
        </span>
        <span style="height:68px" data-part="bar">
        </span>
        <small>
          7월
        </small>
      </div>
      <div>
        <span>
          55
        </span>
        <span style="height:55px" data-part="bar">
        </span>
        <small>
          8월
        </small>
      </div>
      <div>
        <span>
          90
        </span>
        <span style="height:90px" data-part="bar">
        </span>
        <small>
          9월
        </small>
      </div>
      <div>
        <span>
          76
        </span>
        <span style="height:76px" data-part="bar">
        </span>
        <small>
          10월
        </small>
      </div>
    </div>
  </div>
</template>
