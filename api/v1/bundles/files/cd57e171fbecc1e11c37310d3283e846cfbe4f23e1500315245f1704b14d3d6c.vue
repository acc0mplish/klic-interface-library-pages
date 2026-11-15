<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="aspect-ratio" data-kv-variant="cover" data-klic-component="aspect-ratio" class="kn-aspect-ratio">
    <figure data-part="figure">
      <div role="img" aria-label="더 나은 협업" data-part="art ratio-wide">
        <span>
          KLIC
        </span>
        <strong>
          더 나은 협업
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <figcaption>
        프로젝트 커버 · 16:9
      </figcaption>
    </figure>
  </div>
</template>
