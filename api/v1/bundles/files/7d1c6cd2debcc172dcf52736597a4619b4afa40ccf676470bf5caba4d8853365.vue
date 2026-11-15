<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="result" class="kn-result">
    <div data-part="empty">
      <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
      <strong>
        변경사항이 반영됐어요.
      </strong>
      <p>
        팀이 같은 내용을 확인할 수 있습니다.
      </p>
      <a href="#components" data-part="link">
        컴포넌트로 돌아가기
        <component :is="KlicIcons.ArrowRight" data-part="icon" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>
