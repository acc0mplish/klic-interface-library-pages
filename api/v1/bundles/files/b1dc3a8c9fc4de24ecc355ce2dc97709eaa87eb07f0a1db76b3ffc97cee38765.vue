<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="chip" data-kv-variant="removable" data-klic-component="chip" class="kn-chip">
    <header data-part="heading">
      <strong>
        적용된 필터
      </strong>
    </header>
    <div data-part="tags">
      <span data-part="chip">
        디자인 팀
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="디자인 팀 필터 해제" data-part="btn">
          ×
        </button>
      </span>
      <span data-part="chip">
        이번 주
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="이번 주 필터 해제" data-part="btn">
          ×
        </button>
      </span>
      <span data-part="chip">
        진행 중
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="진행 중 필터 해제" data-part="btn">
          ×
        </button>
      </span>
    </div>
    <p data-part="muted">
      각 태그의 닫기 버튼으로 조건을 제거하세요.
    </p>
  </div>
</template>
