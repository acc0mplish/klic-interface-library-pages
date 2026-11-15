<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="timeline" class="kn-timeline">
    <ol data-part="timeline">
      <li>
        <time datetime="2026-10-24T10:30">
          10:30
        </time>
        <strong>
          디자인 검토 완료
        </strong>
      </li>
      <li>
        <time datetime="2026-10-24T09:45">
          09:45
        </time>
        <strong>
          컴포넌트 업데이트
        </strong>
      </li>
      <li>
        <time datetime="2026-10-24T09:00">
          09:00
        </time>
        <strong>
          프로젝트 시작
        </strong>
      </li>
    </ol>
  </div>
</template>
