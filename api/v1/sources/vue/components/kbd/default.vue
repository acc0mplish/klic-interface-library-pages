<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="kbd" class="kn-kbd">
    <div data-part="stack" class="ku-stack">
      <span>
        검색
        <kbd>
          ⌘
        </kbd>
        +
        <kbd>
          K
        </kbd>
      </span>
      <span>
        선택 이동
        <kbd>
          Tab
        </kbd>
      </span>
      <span>
        닫기
        <kbd>
          Esc
        </kbd>
      </span>
    </div>
  </div>
</template>
