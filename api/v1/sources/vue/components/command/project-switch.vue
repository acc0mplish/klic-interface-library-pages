<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="command" data-kv-variant="project-switch" data-klic-component="command" class="kn-command">
    <header data-part="heading">
      <strong>
        프로젝트로 이동
      </strong>
    </header>
    <input type="search" data-kv-filter placeholder="프로젝트 검색" aria-label="프로젝트 검색" data-part="input">
    <div data-part="menu">
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        웹 리뉴얼
      </button>
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        디자인 시스템
      </button>
      <button type="button" data-kv-filter-item data-kv-action="choose" data-part="btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        분석 대시보드
      </button>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
