<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button" data-kv-variant="confirmation" data-klic-component="button" class="kn-btn">
    <header data-part="heading">
      <strong>
        사용하지 않는 초안
      </strong>
      <p data-part="muted">
        삭제를 누르면 확인 단계가 표시됩니다.
      </p>
    </header>
    <div data-kv-confirm>
      <button type="button" data-klic-surface="control" data-kv-action="confirm"  data-part="btn">
        <component :is="KlicIcons.Trash2" data-part="icon" aria-hidden="true" />
        초안 삭제
      </button>
      <div hidden data-kv-confirm-panel>
        <p data-part="muted">
          이 미리 보기의 초안을 삭제할까요?
        </p>
        <button type="button" data-klic-surface="control" data-kv-action="confirmed"  data-part="btn">
          삭제 확인
        </button>
        <button type="button" data-klic-surface="control" data-kv-action="cancel-confirm"  data-part="btn">
          취소
        </button>
      </div>
      <output aria-live="polite" data-part="output">
      </output>
    </div>
  </div>
</template>
