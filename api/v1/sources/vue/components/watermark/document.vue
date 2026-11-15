<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="watermark" data-kv-variant="document" data-klic-component="watermark" class="kn-watermark">
    <article data-part="watermarked">
      <span aria-hidden="true" data-part="watermark">
        KLIC INTERNAL
      </span>
      <span data-part="badge">
        내부 문서
      </span>
      <header data-part="heading">
        <strong>
          디자인 가이드 초안
        </strong>
      </header>
      <p data-part="muted">
        본 자료는 팀 내부 검토용입니다. 공유 전 최종 내용을 확인하세요.
      </p>
      <ul data-part="list">
        <li>
          기본 원칙
        </li>
        <li>
          컴포넌트 구성
        </li>
        <li>
          검토 항목
        </li>
      </ul>
    </article>
  </div>
</template>
