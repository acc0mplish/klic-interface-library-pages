<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toast" data-kv-variant="undo" data-klic-component="toast" class="kn-toast">
    <button type="button" data-klic-surface="control" data-kv-action="toast-show"  data-part="btn">
      알림 다시 표시
    </button>
    <section data-kv-toast role="status" data-part="toast-box">
      <div data-kv-undo>
        <header data-part="heading">
          <strong>
            문서를 보관했습니다
          </strong>
          <p data-part="muted">
            브랜드 가이드 · 로컬 예제
          </p>
        </header>
        <button type="button" data-klic-surface="control" data-kv-action="undo"  data-part="btn">
          실행 취소
        </button>
        <output aria-live="polite" data-part="output">
        </output>
      </div>
      <button type="button" data-klic-surface="control" data-kv-action="toast-close" aria-label="알림 닫기" data-part="btn">
        ×
      </button>
    </section>
  </div>
</template>
