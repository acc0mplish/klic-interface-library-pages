<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="alert" class="kn-alert">
    <div role="note" data-part="alert">
      <component :is="KlicIcons.Info" data-part="icon" aria-hidden="true" />
      <div>
        <strong>
          검토할 변경사항이 있어요.
        </strong>
        <p>
          새로운 토큰 값을 적용하기 전에 팀과 확인하세요.
        </p>
      </div>
    </div>
  </div>
</template>
