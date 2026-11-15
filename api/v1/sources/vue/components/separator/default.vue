<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="separator" class="kn-separator">
    <div data-part="stack" class="ku-stack">
      <strong>
        프로젝트 정보
      </strong>
      <p>
        같은 맥락의 내용을 묶습니다.
      </p>
      <hr>
      <p>
        다음 주제로 이어지는 구분.
      </p>
    </div>
  </div>
</template>
