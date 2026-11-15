<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="breadcrumb" data-kv-variant="path" data-klic-component="breadcrumb" class="kn-breadcrumb">
    <nav aria-label="문서 경로" data-part="breadcrumb">
      <button type="button" data-klic-surface="control" data-kv-action="crumb"  data-part="btn">
        워크스페이스
      </button>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <button type="button" data-klic-surface="control" data-kv-action="crumb"  data-part="btn">
        디자인
      </button>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <span aria-current="page">
        브랜드 가이드
      </span>
    </nav>
    <header data-part="heading">
      <strong>
        브랜드 가이드
      </strong>
      <p data-part="muted">
        팀이 함께 사용하는 시각 언어
      </p>
    </header>
  </div>
</template>
