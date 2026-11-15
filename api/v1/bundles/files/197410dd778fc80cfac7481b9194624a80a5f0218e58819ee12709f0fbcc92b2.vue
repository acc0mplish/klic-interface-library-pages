<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="search-input" data-kv-variant="document-filter" data-klic-component="search-input" class="kn-search-input">
    <header data-part="heading">
      <strong>
        문서 검색
      </strong>
    </header>
    <input type="search" data-kv-filter aria-label="문서 검색" placeholder="문서명 검색" data-part="input">
    <ul data-part="list">
      <li>
        <span data-kv-filter-item>
          브랜드 가이드
        </span>
      </li>
      <li>
        <span data-kv-filter-item>
          API 연동 문서
        </span>
      </li>
      <li>
        <span data-kv-filter-item>
          디자인 토큰
        </span>
      </li>
      <li>
        <span data-kv-filter-item>
          운영 체크리스트
        </span>
      </li>
    </ul>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
