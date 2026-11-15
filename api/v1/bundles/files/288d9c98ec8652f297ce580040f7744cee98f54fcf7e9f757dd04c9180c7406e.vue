<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="banner" data-kv-variant="maintenance" data-klic-component="banner" class="kn-banner">
    <section data-part="banner banner-warning">
      <component :is="KlicIcons.CalendarClock" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          정기 점검 안내
        </strong>
        <p data-part="muted">
          2026.11.01 · 02:00–03:00 UTC
        </p>
      </header>
      <p data-part="muted">
        점검 중 파일 가져오기가 일시 중단됩니다. 문서 읽기는 계속 이용할 수 있습니다.
      </p>
      <span data-part="badge">
        약 1시간 예정
      </span>
    </section>
  </div>
</template>
