<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="donut-chart" class="kn-donut-chart">
    <div role="img" aria-label="디자인 50%, 개발 30%, 기획 20%" data-part="donut">
      <strong>
        100
        <small>
          전체 작업
        </small>
      </strong>
    </div>
    <ul data-part="legend">
      <li>
        디자인
        <b>
          50%
        </b>
      </li>
      <li>
        개발
        <b>
          30%
        </b>
      </li>
      <li>
        기획
        <b>
          20%
        </b>
      </li>
    </ul>
  </div>
</template>
