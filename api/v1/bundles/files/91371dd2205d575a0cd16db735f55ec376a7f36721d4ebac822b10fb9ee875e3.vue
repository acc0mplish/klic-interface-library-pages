<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="breadcrumb" data-kv-variant="back-trail" data-klic-component="breadcrumb" class="kn-breadcrumb">
    <button type="button" data-klic-surface="control" data-kv-action="crumb"  data-part="btn">
      <component :is="KlicIcons.ArrowLeft" data-part="icon" aria-hidden="true" />
      프로젝트 목록
    </button>
    <nav aria-label="현재 위치" data-part="breadcrumb">
      <span>
        프로젝트
      </span>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <strong aria-current="page">
        KLIC 라이브러리
      </strong>
    </nav>
    <span data-part="badge">
      진행 중
    </span>
  </div>
</template>
