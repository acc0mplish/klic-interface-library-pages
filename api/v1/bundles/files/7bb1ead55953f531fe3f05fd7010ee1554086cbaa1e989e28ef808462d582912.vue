<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="context-menu" data-kv-variant="document" data-klic-component="context-menu" class="kn-context-menu">
    <div data-kv-context tabindex="0" aria-label="브랜드 가이드 컨텍스트 영역" data-kv-menu-id="kv-export-context-menu-context-menu-document-context" data-part="context-zone">
      <component :is="KlicIcons.MousePointer2" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          브랜드 가이드
        </strong>
        <p data-part="muted">
          마우스 오른쪽 버튼 · Shift + F10 · 아래 버튼
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="context-open" aria-haspopup="menu" aria-controls="kv-export-context-menu-context-menu-document-context" data-part="btn">
        작업 메뉴 열기
      </button>
      <div data-klic-surface="overlay" id="kv-export-context-menu-context-menu-document-context" role="menu" aria-label="브랜드 가이드 작업" data-kv-context-menu popover="manual" hidden data-part="context-menu" data-state="closed">
        <button type="button" role="menuitem" data-kv-action="copy-text" data-kv-value="https://example.com/docs/brand" data-part="btn">
          문서 링크 복사
        </button>
        <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
          검토 요청
        </button>
        <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
          문서 보관
        </button>
      </div>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
