<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button" data-kv-variant="leading-icon" data-klic-component="button" class="kn-btn">
    <header data-part="heading">
      <strong>
        팀의 다음 작업을 시작하세요
      </strong>
      <p data-part="muted">
        프로젝트 생성 후 멤버를 초대할 수 있습니다.
      </p>
    </header>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="notice" data-kv-message="새 프로젝트 초안이 준비되었습니다." data-part="btn">
        <component :is="KlicIcons.Plus" data-part="icon" aria-hidden="true" />
        새 프로젝트
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
        <component :is="KlicIcons.Upload" data-part="icon" aria-hidden="true" />
        파일 가져오기
      </button>
    </div>
  </div>
</template>
