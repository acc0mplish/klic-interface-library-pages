<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="timeline" data-kv-variant="release" data-klic-component="timeline" class="kn-timeline">
    <ol data-part="timeline">
      <li>
        <span data-part="badge">
          v2.4 · 최신
        </span>
        <header data-part="heading">
          <strong>
            2026.10.26
          </strong>
        </header>
        <ul data-part="list">
          <li>
            컴포넌트 예제 확대
          </li>
          <li>
            접근성 안내 추가
          </li>
        </ul>
      </li>
      <li>
        <span data-part="badge">
          v2.3
        </span>
        <header data-part="heading">
          <strong>
            2026.09.30
          </strong>
        </header>
        <p data-part="muted">
          디자인 토큰 구조 개선
        </p>
      </li>
    </ol>
  </div>
</template>
