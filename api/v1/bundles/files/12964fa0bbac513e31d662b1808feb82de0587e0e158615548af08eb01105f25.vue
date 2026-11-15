<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="blockquote" data-kv-variant="testimonial" data-klic-component="blockquote" class="kn-blockquote">
    <figure data-part="quote">
      <blockquote>
        반복 작업을 줄이고 사용자 경험에 더 집중할 수 있었어요.
      </blockquote>
      <figcaption>
        <span aria-label="박" data-part="avatar">
          박
        </span>
        박서연 · 제품 팀
      </figcaption>
    </figure>
  </div>
</template>
