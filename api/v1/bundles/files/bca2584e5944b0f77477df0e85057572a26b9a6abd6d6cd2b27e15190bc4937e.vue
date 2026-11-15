<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="dialog" class="kn-dialog">
    <div data-part="dialog-mini-header">
      프로젝트를 시작할까요?
      <component :is="KlicIcons.Sparkles" data-part="icon" />
    </div>
    <p>
      작은 아이디어를 모아
      <br>
      새로운 가능성을 만들어보세요.
    </p>
    <div data-part="dialog-mini-actions">
      <button data-action="dialog" class="kv-neutral" data-part="btn">
        미리보기
      </button>
      <button data-action="dialog" data-part="btn">
        시작하기
        <component :is="KlicIcons.ArrowUpRight" data-part="icon" />
      </button>
    </div>
  </div>
</template>
