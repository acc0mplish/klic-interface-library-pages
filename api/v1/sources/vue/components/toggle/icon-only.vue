<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle" data-kv-variant="icon-only" data-klic-component="toggle" class="kn-toggle">
    <div class="ku-row" data-part="row">
      <span>
        <header data-part="heading">
          <strong>
            주간 회고
          </strong>
          <p data-part="muted">
            이번 주의 배움과 다음 행동
          </p>
        </header>
      </span>
      <span>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="이 문서 상단 고정" title="상단 고정" aria-pressed="false" data-part="btn">
          <component :is="KlicIcons.Pin" data-part="icon" aria-hidden="true" />
        </button>
      </span>
    </div>
    <p data-part="muted">
      아이콘의 누름 상태로 문서 고정을 관리합니다.
    </p>
  </div>
</template>
