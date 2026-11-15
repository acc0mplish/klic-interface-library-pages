<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle" data-kv-variant="reaction" data-klic-component="toggle" class="kn-toggle">
    <header data-part="heading">
      <strong>
        디자인 리뷰를 마쳤습니다
      </strong>
      <p data-part="muted">
        컴포넌트 예제 400개를 함께 살펴보세요.
      </p>
    </header>
    <p data-part="muted">
      이 업데이트가 도움이 되었다면 반응을 남겨 주세요.
    </p>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.ThumbsUp" data-part="icon" aria-hidden="true" />
        도움이 됐어요
      </button>
    </div>
  </div>
</template>
