<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="icon" data-kv-variant="input-context" data-klic-component="icon" class="kn-icon">
    <label data-part="field">
      <span>
        프로젝트 검색
      </span>
      <span data-klic-surface="field" data-part="input-group">
        <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
        <input type="search" aria-label="프로젝트 검색" placeholder="프로젝트 이름" data-part="input">
      </span>
    </label>
    <label data-part="field">
      <span>
        이메일
      </span>
      <span data-klic-surface="field" data-part="input-group">
        <component :is="KlicIcons.Mail" data-part="icon" aria-hidden="true" />
        <input type="email" aria-label="이메일" placeholder="name@example.com" data-part="input">
      </span>
    </label>
  </div>
</template>
