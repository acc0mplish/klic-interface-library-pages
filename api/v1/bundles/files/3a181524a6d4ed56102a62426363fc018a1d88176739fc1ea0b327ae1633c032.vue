<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="badge" class="kn-badge">
    <span data-part="badge">
      <component :is="KlicIcons.CircleCheck" data-part="icon" />
      완료
    </span>
    <span class="kv-warning" data-part="badge">
      진행 중
    </span>
    <span class="kv-neutral" data-part="badge">
      대기
    </span>
    <span class="kv-primary" data-part="badge">
      <component :is="KlicIcons.Sparkles" data-part="icon" />
      새로운 기능
    </span>
    <span class="kv-danger" data-part="badge">
      검토 필요
    </span>
    <span class="kv-outline" data-part="badge">
      디자인 시스템
    </span>
  </div>
</template>
