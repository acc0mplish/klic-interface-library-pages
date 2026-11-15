<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-group" data-kv-variant="search-action" data-klic-component="input-group" class="kn-input-group">
    <header data-part="heading">
      <strong>
        문서 찾기
      </strong>
    </header>
    <div data-klic-surface="field" data-part="input-group">
      <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
      <input type="search" data-kv-filter aria-label="문서 검색" placeholder="이름으로 검색" data-part="input">
      <button type="button" data-klic-surface="control" data-kv-action="clear-search"  data-part="btn">
        초기화
      </button>
    </div>
    <ul data-part="list">
      <li>
        <span data-kv-filter-item>
          디자인 시스템
        </span>
      </li>
      <li>
        <span data-kv-filter-item>
          프로젝트 보고서
        </span>
      </li>
      <li>
        <span data-kv-filter-item>
          운영 가이드
        </span>
      </li>
    </ul>
  </div>
</template>
