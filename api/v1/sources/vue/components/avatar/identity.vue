<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="avatar" data-kv-variant="identity" data-klic-component="avatar" class="kn-avatar">
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="김" data-part="avatar">
          김
        </span>
      </span>
      <span>
        <header data-part="heading">
          <strong>
            김하늘
          </strong>
          <p data-part="muted">
            프로덕트 디자이너
          </p>
        </header>
      </span>
    </div>
    <span data-part="badge">
      ● 업무 중
    </span>
    <p data-part="muted">
      제품 디자인 · 서울
    </p>
  </div>
</template>
