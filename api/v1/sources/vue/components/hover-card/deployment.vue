<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="hover-card" data-kv-variant="deployment" data-klic-component="hover-card" class="kn-hover-card">
    <header data-part="heading">
      <strong>
        현재 배포
      </strong>
    </header>
    <div data-part="hover-wrap">
      <button type="button" data-klic-surface="control" data-kv-hover aria-expanded="false" aria-controls="kv-export-hover-card-hover-card-deployment-hover" data-part="btn">
        <component :is="KlicIcons.Globe" data-part="icon" aria-hidden="true" />
        v2.4.0
      </button>
      <section data-klic-surface="overlay" popover="manual" id="kv-export-hover-card-hover-card-deployment-hover" data-part="hover-content" data-state="closed">
        <header data-part="heading">
          <strong>
            배포 완료
          </strong>
          <p data-part="muted">
            프로덕션 환경
          </p>
        </header>
        <div class="ku-row" data-part="row">
          <span>
            배포 시각
          </span>
          <span>
            2026.10.26 09:00 UTC
          </span>
        </div>
        <div class="ku-row" data-part="row">
          <span>
            리전
          </span>
          <span>
            서울
          </span>
        </div>
        <span data-part="badge">
          ● 정상 운영
        </span>
      </section>
    </div>
  </div>
</template>
