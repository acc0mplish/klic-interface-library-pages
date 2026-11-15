<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="result" data-kv-variant="review" data-klic-component="result" class="kn-result">
    <section data-part="empty">
      <component :is="KlicIcons.Clock3" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          관리자 승인 대기 중
        </strong>
        <p data-part="muted">
          요청은 정상적으로 전달되었습니다.
        </p>
      </header>
      <ul data-part="list">
        <li>
          요청 접수 완료
        </li>
        <li>
          팀 관리자 검토 대기
        </li>
        <li>
          승인 후 알림 발송
        </li>
      </ul>
    </section>
  </div>
</template>
