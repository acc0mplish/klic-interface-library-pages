<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="dropdown-menu" data-kv-variant="file-actions" data-klic-component="dropdown-menu" class="kn-dropdown-menu">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          브랜드 가이드
        </strong>
      </header>
      <p data-part="muted">
        팀 문서 · 수정 3분 전
      </p>
    </section>
    <div data-part="popover-wrap">
      <button type="button" data-klic-surface="control" data-kv-action="popover-open" aria-expanded="false" aria-controls="kv-export-dropdown-menu-dropdown-menu-file-actions-popover" aria-haspopup="menu" data-part="btn">
        문서 작업
      </button>
      <div data-klic-surface="overlay" id="kv-export-dropdown-menu-dropdown-menu-file-actions-popover" role="menu" data-kv-context-menu aria-label="문서 작업" data-kv-floating popover="manual" hidden data-part="floating-panel" data-state="closed">
        <button type="button" role="menuitem" data-kv-action="copy-text" data-kv-value="https://example.com/doc" data-part="btn">
          문서 링크 복사
        </button>
        <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
          검토 요청
        </button>
        <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
          보관
        </button>
      </div>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
