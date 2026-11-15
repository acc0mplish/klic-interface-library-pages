<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="result" data-kv-variant="retry" data-klic-component="result" class="kn-result">
    <section class="kv-danger" data-part="empty">
      <component :is="KlicIcons.CircleX" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          연결을 완료하지 못했습니다
        </strong>
        <p data-part="muted">
          네트워크 상태를 확인한 뒤 다시 시도해 주세요.
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="retry"  data-part="btn">
        로컬 재시도
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </section>
  </div>
</template>
