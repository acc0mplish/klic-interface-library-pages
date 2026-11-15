<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="anchor" data-kv-variant="legal" data-klic-component="anchor" class="kn-anchor">
    <nav aria-label="정책 조항" data-part="anchor">
      <a href="#kv-export-anchor-anchor-legal-privacy" data-part="link">
        1. 개인정보
      </a>
      <a href="#kv-export-anchor-anchor-legal-retention" data-part="link">
        2. 보관 기간
      </a>
    </nav>
    <section id="kv-export-anchor-anchor-legal-privacy" tabindex="-1">
      <header data-part="heading">
        <strong>
          1. 개인정보
        </strong>
      </header>
      <p data-part="muted">
        서비스 이용에 필요한 최소 정보만 처리합니다.
      </p>
    </section>
    <section id="kv-export-anchor-anchor-legal-retention" tabindex="-1">
      <header data-part="heading">
        <strong>
          2. 보관 기간
        </strong>
      </header>
      <p data-part="muted">
        팀의 설정과 계약에 따라 자료를 보관합니다.
      </p>
    </section>
  </div>
</template>
