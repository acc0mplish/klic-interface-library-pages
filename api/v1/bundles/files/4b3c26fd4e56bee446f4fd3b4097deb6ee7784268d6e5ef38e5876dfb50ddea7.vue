<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="input" class="kn-input">
    <label for="export-input-default-name">
      프로젝트 이름
    </label>
    <input data-klic-publishing-target="input-name" id="export-input-default-name" placeholder="이름을 입력하세요" aria-describedby="export-input-default-hint" data-part="input">
    <div data-part="input-icon-wrap">
      <component :is="KlicIcons.Search" data-part="icon" />
      <input type="search" placeholder="팀원 검색…" aria-label="팀원 검색 예시" data-part="input">
    </div>
    <p id="export-input-default-hint" data-part="helper">
      팀과 함께할 멋진 이름을 지어주세요.
    </p>
  </div>
</template>
