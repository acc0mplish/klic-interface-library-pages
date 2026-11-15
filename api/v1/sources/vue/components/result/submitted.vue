<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="result" data-kv-variant="submitted" data-klic-component="result" class="kn-result">
    <section data-part="empty">
      <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          요청이 접수되었습니다
        </strong>
        <p data-part="muted">
          담당자가 내용을 검토한 뒤 안내드립니다.
        </p>
      </header>
      <div class="ku-row" data-part="row">
        <span>
          접수 번호
        </span>
        <span>
          KLIC-20261026
        </span>
      </div>
      <button type="button" data-klic-surface="control" data-kv-action="copy-text" data-kv-value="KLIC-20261026" data-part="btn">
        접수 번호 복사
      </button>
    </section>
  </div>
</template>
