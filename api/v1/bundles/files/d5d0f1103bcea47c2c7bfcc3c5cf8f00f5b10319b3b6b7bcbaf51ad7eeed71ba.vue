<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="dropdown-menu" class="kn-dropdown-menu">
    <button type="button" popovertarget="export-dropdown-menu-default-popup" data-part="btn" class="kv-neutral kv-sm">
      프로젝트 옵션
      <component :is="KlicIcons.ChevronDown" data-part="icon" aria-hidden="true" />
    </button>
    <div popover="auto" id="export-dropdown-menu-default-popup" data-part="popover" data-state="closed">
      <button type="button" data-cmp-action="menu-choice" data-name="이름 변경" data-part="btn" class="kv-neutral kv-sm">
        이름 변경
      </button>
      <button type="button" data-cmp-action="menu-choice" data-name="복제하기" data-part="btn" class="kv-neutral kv-sm">
        복제하기
      </button>
      <button type="button" data-cmp-action="menu-choice" data-name="링크 확인" data-part="btn" class="kv-neutral kv-sm">
        링크 확인
      </button>
    </div>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
