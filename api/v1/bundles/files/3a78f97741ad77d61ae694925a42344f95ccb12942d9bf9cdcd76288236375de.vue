<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="alert" data-kv-variant="success-summary" data-klic-component="alert" class="kn-alert">
    <section data-part="message">
      <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
      <div>
        <header data-part="heading">
          <strong>
            변경 사항을 저장했습니다
          </strong>
          <p data-part="muted">
            프로필과 알림 설정이 업데이트되었습니다.
          </p>
        </header>
        <div class="ku-row" data-part="row">
          <span>
            저장 시각
          </span>
          <span>
            방금 전
          </span>
        </div>
        <button type="button" data-klic-surface="control" data-kv-action="dismiss"  data-part="btn">
          확인
        </button>
      </div>
    </section>
  </div>
</template>
