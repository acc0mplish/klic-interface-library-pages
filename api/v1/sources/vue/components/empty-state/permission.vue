<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="empty-state" data-kv-variant="permission" data-klic-component="empty-state" class="kn-empty-state">
    <section data-part="empty">
      <component :is="KlicIcons.LockKeyhole" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          접근 권한이 필요합니다
        </strong>
        <p data-part="muted">
          팀 관리자의 초대를 받은 뒤 이 문서를 확인할 수 있습니다.
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="notice" data-kv-message="데모: 접근 요청을 준비했습니다." data-part="btn">
        접근 요청 준비
      </button>
      <p data-part="muted">
        관리자 · 김하늘
      </p>
    </section>
  </div>
</template>
