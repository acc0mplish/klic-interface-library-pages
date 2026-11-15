<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="loading-overlay" data-kv-variant="progress-overlay" data-klic-component="loading-overlay" class="kn-loading-overlay">
    <div data-part="overlay-wrap">
      <div role="img" aria-label="프로젝트 자료" data-part="art">
        <span>
          KLIC
        </span>
        <strong>
          프로젝트 자료
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <div role="status" data-part="local-overlay">
        <header data-part="heading">
          <strong>
            자료 분석 중
          </strong>
          <p data-part="muted">
            10개 중 7개 확인
          </p>
        </header>
        <label data-part="progress-label">
          완료
          <span>
            70%
          </span>
          <progress max="100" value="70">
            70%
          </progress>
        </label>
      </div>
    </div>
  </div>
</template>
