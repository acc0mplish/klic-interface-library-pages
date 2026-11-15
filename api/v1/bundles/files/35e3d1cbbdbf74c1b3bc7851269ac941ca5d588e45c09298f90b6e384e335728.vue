<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="badge" data-kv-variant="status" data-klic-component="badge" class="kn-badge">
    <header data-part="heading">
      <strong>
        릴리스 준비
      </strong>
    </header>
    <div class="ku-row" data-part="row">
      <span>
        디자인 검토
      </span>
      <span>
        <span data-part="badge">
          ● 검토 중
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        개발 구현
      </span>
      <span>
        <span data-part="badge">
          ✓ 완료
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        배포 확인
      </span>
      <span>
        <span class="kv-warning" data-part="badge">
          대기
        </span>
      </span>
    </div>
  </div>
</template>
