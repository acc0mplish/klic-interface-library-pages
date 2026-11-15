<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="alert" data-kv-variant="warning" data-klic-component="alert" class="kn-alert">
    <section class="kv-warning" data-part="message">
      <component :is="KlicIcons.TriangleAlert" data-part="icon" aria-hidden="true" />
      <div>
        <header data-part="heading">
          <strong>
            연결 상태를 확인하세요
          </strong>
          <p data-part="muted">
            이메일 주소가 아직 확인되지 않았습니다.
          </p>
        </header>
        <button type="button" data-klic-surface="control" data-kv-action="notice" data-kv-message="데모: 확인 메일을 요청했습니다." data-part="btn">
          확인 메일 요청
        </button>
      </div>
    </section>
  </div>
</template>
