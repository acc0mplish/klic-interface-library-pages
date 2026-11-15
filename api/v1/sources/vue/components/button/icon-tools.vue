<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button" data-kv-variant="icon-tools" data-klic-component="button" class="kn-btn">
    <header data-part="heading">
      <strong>
        문서 도구
      </strong>
      <p data-part="muted">
        자주 사용하는 작업을 작은 아이콘으로 배치합니다.
      </p>
    </header>
    <div data-part="icon-tools">
      <div>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" aria-label="관심 문서" title="관심 문서" data-part="btn">
          <component :is="KlicIcons.Bookmark" data-part="icon" aria-hidden="true" />
        </button>
        <small>
          관심 문서
        </small>
      </div>
      <div>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" aria-label="상단 고정" title="상단 고정" data-part="btn">
          <component :is="KlicIcons.Pin" data-part="icon" aria-hidden="true" />
        </button>
        <small>
          상단 고정
        </small>
      </div>
      <div>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" aria-label="알림 받기" title="알림 받기" data-part="btn">
          <component :is="KlicIcons.Bell" data-part="icon" aria-hidden="true" />
        </button>
        <small>
          알림 받기
        </small>
      </div>
    </div>
    <details  data-part="details">
      <summary>
        아이콘 안내
      </summary>
      <div>
        <p data-part="muted">
          관심 문서에 저장하거나 상단에 고정하고 알림을 받을 수 있습니다. 각 선택은 독립적으로 유지됩니다.
        </p>
      </div>
    </details>
  </div>
</template>
