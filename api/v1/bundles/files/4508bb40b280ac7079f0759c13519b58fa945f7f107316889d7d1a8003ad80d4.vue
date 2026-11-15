<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle" data-kv-variant="bookmark" data-klic-component="toggle" class="kn-toggle">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          접근성 검토 가이드
        </strong>
      </header>
      <span data-part="badge">
        팀 문서
      </span>
      <p data-part="muted">
        키보드 탐색과 레이블을 점검하는 실무 가이드
      </p>
    </section>
    <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
      <component :is="KlicIcons.Bookmark" data-part="icon" aria-hidden="true" />
      내 보관함에 저장
    </button>
    <p data-part="muted">
      다시 누르면 보관을 해제합니다.
    </p>
  </div>
</template>
