<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="aspect-ratio" data-kv-variant="captioned" data-klic-component="aspect-ratio" class="kn-aspect-ratio">
    <figure data-part="figure">
      <div role="img" aria-label="연결의 원칙" data-part="art">
        <span>
          KLIC
        </span>
        <strong>
          연결의 원칙
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <figcaption>
        <header data-part="heading">
          <strong>
            팀을 연결하는 시스템
          </strong>
          <p data-part="muted">
            KLIC 독립 제작 CSS 그래픽
          </p>
        </header>
        <button type="button" data-klic-surface="control" data-kv-action="copy-text" data-kv-value="KLIC: 팀을 연결하는 시스템" data-part="btn">
          설명 복사
        </button>
      </figcaption>
    </figure>
  </div>
</template>
