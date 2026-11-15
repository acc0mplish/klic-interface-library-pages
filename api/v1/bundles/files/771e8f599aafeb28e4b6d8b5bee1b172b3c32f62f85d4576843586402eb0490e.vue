<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="steps" class="kn-steps">
    <ol data-step="1" data-part="steps">
      <li >
        <span>
          ✓
        </span>
        <small>
          기본 정보
        </small>
      </li>
      <li aria-current="step">
        <span>
          2
        </span>
        <small>
          팀 초대
        </small>
      </li>
      <li >
        <span>
          3
        </span>
        <small>
          시작하기
        </small>
      </li>
    </ol>
    <button type="button" data-cmp-action="next-step"  data-part="btn" class="kv-neutral kv-sm">
      다음 단계
    </button>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
