<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="select" class="kn-select">
    <label for="export-select-default-select" data-part="label">
      프로젝트 공개 범위
    </label>
    <select id="export-select-default-select" data-action="demo-select" data-part="select">
      <option value="team">
        팀 멤버만
      </option>
      <option value="private">
        나만 보기
      </option>
      <option value="public">
        링크가 있는 모든 사람
      </option>
    </select>
    <p aria-live="polite" data-part="helper">
      초대된 팀 멤버만 접근할 수 있어요.
    </p>
  </div>
</template>
