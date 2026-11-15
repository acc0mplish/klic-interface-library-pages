<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="sheet" class="kn-sheet">
    <button data-action="sheet" class="kv-neutral" data-part="btn">
      <component :is="KlicIcons.PanelRight" data-part="icon" />
      프로젝트 설정
    </button>
    <span>
      화면 옆에서 더 자세히 살펴보세요.
    </span>
  </div>
</template>
