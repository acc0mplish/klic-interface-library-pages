<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="spinner" data-kv-variant="steps" data-klic-component="spinner" class="ku-spin kn-spinner">
    <header data-part="heading">
      <strong>
        파일 처리 중
      </strong>
    </header>
    <div class="ku-row" data-part="row">
      <span>
        <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
        파일 확인
      </span>
      <span>
        <span data-part="badge">
          완료
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        <span aria-hidden="true" class="ku-spin" data-part="spinner">
        </span>
        내용 분석
      </span>
      <span>
        <span data-part="badge">
          진행 중
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        결과 준비
      </span>
      <span>
        <span data-part="badge">
          대기
        </span>
      </span>
    </div>
  </div>
</template>
