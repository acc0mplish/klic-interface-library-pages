<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="empty-state" class="kn-empty-state">
    <div data-empty data-part="empty">
      <component :is="KlicIcons.FolderPlus" data-part="icon" aria-hidden="true" />
      <strong>
        아직 프로젝트가 없어요.
      </strong>
      <p>
        첫 프로젝트를 만들고 팀과 시작하세요.
      </p>
      <button type="button" data-cmp-action="create-item"  data-part="btn" class="kv-neutral kv-sm">
        프로젝트 만들기
      </button>
    </div>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
