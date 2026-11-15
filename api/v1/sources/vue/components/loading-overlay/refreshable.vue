<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="loading-overlay" data-kv-variant="refreshable" data-klic-component="loading-overlay" class="kn-loading-overlay">
    <div data-kv-refresh>
      <header data-part="heading">
        <strong>
          최근 활동
        </strong>
      </header>
      <ul data-part="list">
        <li>
          김하늘 · 가이드 업데이트
        </li>
        <li>
          이도윤 · 검토 요청
        </li>
      </ul>
      <button type="button" data-klic-surface="control" data-kv-action="refresh"  data-part="btn">
        활동 새로고침
      </button>
      <output aria-live="polite" data-part="output">
        마지막 갱신 · 방금 전
      </output>
    </div>
  </div>
</template>
