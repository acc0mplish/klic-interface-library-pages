<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <button data-action="toast-demo" data-klic-component="toast" class="kn-toast">
    <span data-part="toast-check">
      <component :is="KlicIcons.Check" data-part="icon" />
    </span>
    <span>
      <strong>
        변경사항을 저장했어요.
      </strong>
      <small>
        이제 팀원과 함께 확인할 수 있습니다.
      </small>
    </span>
    <component :is="KlicIcons.ChevronRight" data-part="icon" />
  </button>
</template>
