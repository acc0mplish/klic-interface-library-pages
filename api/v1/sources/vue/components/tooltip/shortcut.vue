<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tooltip" data-kv-variant="shortcut" data-klic-component="tooltip" class="kn-tooltip">
    <header data-part="heading">
      <strong>
        빠른 검색
      </strong>
      <p data-part="muted">
        버튼에 포인터를 올리거나 Tab으로 초점을 이동하세요.
      </p>
    </header>
    <span data-part="tooltip-wrap">
      <button type="button" data-klic-surface="control" aria-describedby="kv-export-tooltip-tooltip-shortcut-tip" data-kv-tip-trigger data-part="btn">
        <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
        검색 도움말
      </button>
      <span popover="manual" role="tooltip" id="kv-export-tooltip-tooltip-shortcut-tip" data-part="tooltip" data-state="closed">
        빠른 검색을 여는 단축키는 ⌘ + K입니다.
      </span>
    </span>
  </div>
</template>
