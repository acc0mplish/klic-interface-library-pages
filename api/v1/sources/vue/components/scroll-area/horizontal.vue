<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="scroll-area" data-kv-variant="horizontal" data-klic-component="scroll-area" class="kn-scroll-area">
    <header data-part="heading">
      <strong>
        프로젝트 자료
      </strong>
    </header>
    <div tabindex="0" role="region" aria-label="자료 목록" data-part="scroll-gallery">
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            브랜드 가이드
          </strong>
        </header>
        <component :is="KlicIcons.FileText" data-part="icon" aria-hidden="true" />
        <p data-part="muted">
          팀 문서 · 최근 업데이트
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            토큰 사양
          </strong>
        </header>
        <component :is="KlicIcons.FileText" data-part="icon" aria-hidden="true" />
        <p data-part="muted">
          팀 문서 · 최근 업데이트
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            사용성 리뷰
          </strong>
        </header>
        <component :is="KlicIcons.FileText" data-part="icon" aria-hidden="true" />
        <p data-part="muted">
          팀 문서 · 최근 업데이트
        </p>
      </section>
    </div>
  </div>
</template>
