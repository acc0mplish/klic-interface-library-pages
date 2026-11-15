<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="typography" data-kv-variant="editorial" data-klic-component="typography" class="kn-typography">
    <article data-part="article">
      <span data-part="eyebrow">
        01 / KLIC NOTES
      </span>
      <h3>
        명확함을 먼저
      </h3>
      <blockquote>
        사용자가 다음 행동을 알 수 있게.
      </blockquote>
      <p>
        간결한 레이블과 충분한 설명으로 편안한 작업 흐름을 만듭니다.
      </p>
    </article>
  </div>
</template>
