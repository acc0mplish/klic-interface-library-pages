<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="search-input" data-kv-variant="command-search" data-klic-component="search-input" class="kn-search-input">
    <header data-part="heading">
      <strong>
        빠른 실행
      </strong>
      <p data-part="muted">
        명령을 검색하고 선택하세요.
      </p>
    </header>
    <input type="search" data-kv-filter aria-label="명령 검색" placeholder="명령어 입력" data-part="input">
    <div data-part="menu">
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.ArrowUpRight" data-part="icon" aria-hidden="true" />
        새 프로젝트 만들기
      </button>
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.ArrowUpRight" data-part="icon" aria-hidden="true" />
        설정 열기
      </button>
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.ArrowUpRight" data-part="icon" aria-hidden="true" />
        초대 링크 만들기
      </button>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
