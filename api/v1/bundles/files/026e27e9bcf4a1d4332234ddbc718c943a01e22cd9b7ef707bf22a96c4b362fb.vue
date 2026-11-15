<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="skeleton" data-kv-variant="profile" data-klic-component="skeleton" class="kn-skeleton">
    <div role="status" aria-label="프로필 불러오는 중">
      <div class="ku-row" data-part="row">
        <span data-part="skeleton skeleton-circle">
        </span>
        <div class="ku-grow" data-part="grow">
          <span data-part="skeleton sk-line">
          </span>
          <span data-part="skeleton sk-line sk-short">
          </span>
        </div>
      </div>
      <p data-part="muted">
        프로필을 불러오는 중입니다.
      </p>
    </div>
  </div>
</template>
