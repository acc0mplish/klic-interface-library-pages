<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="icon" data-kv-variant="action-icons" data-klic-component="icon" class="kn-icon">
    <header data-part="heading">
      <strong>
        문서 도구
      </strong>
    </header>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="검색" aria-pressed="false" title="검색" data-part="btn">
        <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
        <span data-part="sr-only">
          검색
        </span>
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="보관" aria-pressed="false" title="보관" data-part="btn">
        <component :is="KlicIcons.Bookmark" data-part="icon" aria-hidden="true" />
        <span data-part="sr-only">
          보관
        </span>
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="알림" aria-pressed="false" title="알림" data-part="btn">
        <component :is="KlicIcons.Bell" data-part="icon" aria-hidden="true" />
        <span data-part="sr-only">
          알림
        </span>
      </button>
    </div>
    <p data-part="muted">
      아이콘 버튼은 이름과 누름 상태를 갖습니다.
    </p>
  </div>
</template>
