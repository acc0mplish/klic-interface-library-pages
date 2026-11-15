<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="card" data-kv-variant="media" data-klic-component="card" class="kn-card">
    <article data-klic-surface="card" data-part="card">
      <div role="img" aria-label="디자인의 다음 장" data-part="art">
        <span>
          KLIC
        </span>
        <strong>
          디자인의 다음 장
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <div data-part="card-body">
        <span data-part="badge">
          인사이트
        </span>
        <header data-part="heading">
          <strong>
            함께 만드는 인터페이스
          </strong>
          <p data-part="muted">
            팀의 언어를 하나의 경험으로 연결하세요.
          </p>
        </header>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
          읽음 표시
        </button>
      </div>
    </article>
  </div>
</template>
