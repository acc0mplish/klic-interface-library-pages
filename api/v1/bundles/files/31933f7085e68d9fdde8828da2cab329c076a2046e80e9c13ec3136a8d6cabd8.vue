<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle" data-kv-variant="notification-card" data-klic-component="toggle" class="kn-toggle">
    <button type="button" data-kv-action="toggle" aria-pressed="false" data-part="toggle-card btn">
      <component :is="KlicIcons.Bell" data-part="icon" aria-hidden="true" />
      <span>
        <strong>
          프로젝트 알림 받기
        </strong>
        <small>
          댓글과 검토 요청이 생기면 알려드립니다.
        </small>
      </span>
      <span aria-hidden="true" data-part="toggle-indicator">
      </span>
    </button>
    <p data-part="muted">
      설명 영역을 포함한 버튼 전체를 누를 수 있습니다.
    </p>
  </div>
</template>
