<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="alert-dialog" data-kv-variant="discard" data-klic-component="alert-dialog" class="kn-alert-dialog">
    <header data-part="heading">
      <strong>
        저장하지 않은 변경 3건
      </strong>
    </header>
    <button type="button" data-klic-surface="control" data-kv-action="open" data-kv-target="kv-export-alert-dialog-alert-dialog-discard-dialog" data-part="btn">
      편집 취소
    </button>
    <dialog role="alertdialog" id="kv-export-alert-dialog-alert-dialog-discard-dialog" aria-label="변경 사항을 버릴까요?" data-klic-surface="overlay" data-part="dialog">
      <header data-part="heading">
        <strong>
          변경 사항을 버릴까요?
        </strong>
      </header>
      <p data-part="muted">
        저장하지 않은 제목과 설명의 변경이 사라집니다. 계속 편집하려면 닫기를 선택하세요.
      </p>
      <div class="ku-actions" data-part="actions">
        <button type="button" data-klic-surface="control" data-kv-action="dialog-confirm"  data-part="btn">
          변경 사항 폐기
        </button>
      </div>
      <footer class="ku-actions" data-part="actions">
        <button type="button" data-klic-surface="control" data-kv-action="close"  data-part="btn">
          닫기
        </button>
      </footer>
    </dialog>
  </div>
</template>
