<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="blockquote" data-kv-variant="editorial" data-klic-component="blockquote" class="kn-blockquote">
    <figure data-part="quote">
      <blockquote>
        좋은 도구는 팀이 같은 방향을 바라보게 만듭니다.
      </blockquote>
      <figcaption>
        — KLIC 디자인 원칙
      </figcaption>
    </figure>
  </div>
</template>
