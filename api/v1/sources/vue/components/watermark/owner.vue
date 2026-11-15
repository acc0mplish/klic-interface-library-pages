<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="watermark" data-kv-variant="owner" data-klic-component="watermark" class="kn-watermark">
    <article data-part="watermarked">
      <span aria-hidden="true" data-part="watermark">
        PRODUCT TEAM
      </span>
      <header data-part="heading">
        <strong>
          프로젝트 제안서
        </strong>
      </header>
      <div class="ku-row" data-part="row">
        <span>
          소유 팀
        </span>
        <span>
          제품 디자인
        </span>
      </div>
      <div class="ku-row" data-part="row">
        <span>
          작성일
        </span>
        <span>
          2026.10.26
        </span>
      </div>
      <p data-part="muted">
        제품 디자인 팀 소유 문서 · 외부 공유 전 승인 필요
      </p>
    </article>
  </div>
</template>
