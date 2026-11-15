<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="separator" data-kv-variant="timeline-date" data-klic-component="separator" class="kn-separator">
    <div data-part="separator-label">
      <hr>
      <span>
        오늘
      </span>
      <hr>
    </div>
    <ul data-part="list">
      <li>
        문서 업데이트
      </li>
      <li>
        리뷰 요청
      </li>
    </ul>
    <div data-part="separator-label">
      <hr>
      <span>
        어제
      </span>
      <hr>
    </div>
    <ul data-part="list">
      <li>
        프로젝트 생성
      </li>
    </ul>
  </div>
</template>
