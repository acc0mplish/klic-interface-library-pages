<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="kbd" data-kv-variant="inline-hint" data-klic-component="kbd" class="kn-kbd">
    <label data-part="field">
      <span>
        빠른 검색
      </span>
      <input type="search" value="" placeholder="검색어를 입력하세요" data-part="input">
    </label>
    <p data-part="muted">
      <kbd>
        Tab
      </kbd>
      으로 다음 필드 ·
      <kbd>
        Shift
      </kbd>
      +
      <kbd>
        Tab
      </kbd>
      으로 이전 필드
    </p>
  </div>
</template>
