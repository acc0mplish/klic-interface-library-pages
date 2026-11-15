<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="accordion" class="kn-accordion">
    <details open>
      <summary>
        어떤 프로젝트에 사용할 수 있나요?
        <component :is="KlicIcons.ChevronDown" data-part="icon" />
      </summary>
      <p>
        작은 서비스부터 복잡한 관리 화면까지,
        <br>
        제품에 맞게 구성할 수 있어요.
      </p>
    </details>
    <details>
      <summary>
        디자인 토큰은 어떻게 연결하나요?
        <component :is="KlicIcons.ChevronDown" data-part="icon" />
      </summary>
      <p>
        Component → Semantic → Brand → Primitive 순서로 참조합니다.
      </p>
    </details>
  </div>
</template>
