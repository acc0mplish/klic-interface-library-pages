<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="breadcrumb" data-kv-variant="with-icon" data-klic-component="breadcrumb" class="kn-breadcrumb">
    <nav aria-label="파일 경로" data-part="breadcrumb">
      <button type="button" data-klic-surface="control" data-kv-action="crumb"  data-part="btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        파일
      </button>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <span aria-current="page">
        릴리스 노트
      </span>
    </nav>
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          릴리스 노트
        </strong>
      </header>
      <div class="ku-row" data-part="row">
        <span>
          버전
        </span>
        <span>
          v2.4
        </span>
      </div>
      <div class="ku-row" data-part="row">
        <span>
          업데이트
        </span>
        <span>
          2026.10.26
        </span>
      </div>
    </section>
  </div>
</template>
