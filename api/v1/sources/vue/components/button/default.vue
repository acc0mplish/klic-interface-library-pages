<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="button" class="kn-btn">
    <div class="ku-button-row" data-part="button-row">
      <button data-klic-publishing-target="button-primary" data-action="button-feedback" data-part="btn">
        시작하기
        <component :is="KlicIcons.ArrowRight" data-part="icon" />
      </button>
      <button data-action="button-feedback" class="kv-neutral" data-part="btn">
        더 알아보기
      </button>
    </div>
    <div class="ku-button-row" data-part="button-row">
      <button data-action="button-feedback" class="kv-outline kv-sm" data-part="btn">
        <component :is="KlicIcons.Plus" data-part="icon" />
        새 프로젝트
      </button>
      <button data-action="async-demo" class="kv-sm" data-part="btn">
        <component :is="KlicIcons.Check" data-part="icon" />
        저장하기
      </button>
      <button disabled class="kv-ghost kv-sm" data-part="btn">
        비활성
      </button>
    </div>
  </div>
</template>
