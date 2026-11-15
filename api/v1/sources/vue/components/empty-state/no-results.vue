<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="empty-state" data-kv-variant="no-results" data-klic-component="empty-state" class="kn-empty-state">
    <section data-part="empty">
      <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
      <input type="search" value="일치하지 않는 검색어" aria-label="검색어" data-part="input">
      <header data-part="heading">
        <strong>
          검색 결과가 없습니다
        </strong>
        <p data-part="muted">
          다른 키워드를 사용하거나 조건을 초기화하세요.
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="clear-search"  data-part="btn">
        검색 초기화
      </button>
    </section>
  </div>
</template>
