<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="alert" data-kv-variant="undo" data-klic-component="alert" class="kn-alert">
    <section data-kv-undo data-part="message">
      <component :is="KlicIcons.Archive" data-part="icon" aria-hidden="true" />
      <div>
        <header data-part="heading">
          <strong>
            문서를 보관했습니다
          </strong>
          <p data-part="muted">
            브랜드 가이드 · 로컬 예제
          </p>
        </header>
        <button type="button" data-klic-surface="control" data-kv-action="undo"  data-part="btn">
          실행 취소
        </button>
        <output aria-live="polite" data-part="output">
        </output>
      </div>
    </section>
  </div>
</template>
