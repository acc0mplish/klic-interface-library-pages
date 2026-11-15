<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="link" data-kv-variant="card-link" data-klic-component="link" class="kn-link">
    <a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noopener noreferrer" data-part="link-card link">
      <component :is="KlicIcons.BookOpen" data-part="icon" aria-hidden="true" />
      <span>
        <strong>
          컴포넌트 참고 문서
        </strong>
        <small>
          shadcn/ui의 공개 문서 보기 · 새 탭
        </small>
      </span>
      <component :is="KlicIcons.ArrowUpRight" data-part="icon" aria-hidden="true" />
    </a>
  </div>
</template>
