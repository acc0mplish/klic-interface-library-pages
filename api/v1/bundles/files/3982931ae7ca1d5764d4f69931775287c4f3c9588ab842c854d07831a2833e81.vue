<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="toolbar" class="kn-toolbar">
    <div role="group" aria-label="문서 작업 도구" data-part="stack" class="ku-stack">
      <div role="group" aria-label="문서 명령" data-part="button-row" class="ku-button-row">
        <button type="button" data-cmp-action="menu-choice" data-name="새 문서" data-part="btn" class="kv-neutral kv-sm">
          <component :is="KlicIcons.FilePlus" data-part="icon" aria-hidden="true" />
          새 문서
        </button>
        <button type="button" data-cmp-action="menu-choice" data-name="문서 내보내기" data-part="btn" class="kv-neutral kv-sm">
          <component :is="KlicIcons.Download" data-part="icon" aria-hidden="true" />
          내보내기
        </button>
      </div>
      <hr style="width:100%">
      <div role="group" aria-label="보기 옵션" data-part="button-row" class="ku-button-row">
        <button type="button" data-cmp-action="toggle" aria-pressed="true" data-part="btn" class="kv-neutral kv-sm">
          <component :is="KlicIcons.MessageSquare" data-part="icon" aria-hidden="true" />
          주석 표시
        </button>
      </div>
    </div>
    <p data-part="hint">
      문서 명령과 보기 옵션을 구분한 작업 도구 모음
    </p>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
