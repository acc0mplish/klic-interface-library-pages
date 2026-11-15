<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="chip" data-kv-variant="metadata" data-klic-component="chip" class="kn-chip">
    <header data-part="heading">
      <strong>
        디자인 시스템 2.4
      </strong>
    </header>
    <div data-part="tags">
      <span data-part="badge">
        <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
        멤버 12명
      </span>
      <span data-part="badge">
        <component :is="KlicIcons.FileText" data-part="icon" aria-hidden="true" />
        문서 38개
      </span>
      <span data-part="badge">
        <component :is="KlicIcons.ShieldCheck" data-part="icon" aria-hidden="true" />
        팀 전용
      </span>
    </div>
    <p data-part="muted">
      2026.10.26 업데이트 · 제품 디자인 팀
    </p>
  </div>
</template>
