<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="list" class="kn-list">
    <ul data-part="list">
      <li>
        <span>
          <component :is="KlicIcons.Layers" data-part="icon" aria-hidden="true" />
          디자인 시스템
        </span>
        <button type="button" data-cmp-action="list-open" data-name="디자인 시스템" data-part="btn" class="kv-neutral kv-sm">
          열기
        </button>
      </li>
      <li>
        <span>
          <component :is="KlicIcons.PenTool" data-part="icon" aria-hidden="true" />
          브랜드 리뉴얼
        </span>
        <button type="button" data-cmp-action="list-open" data-name="브랜드 리뉴얼" data-part="btn" class="kv-neutral kv-sm">
          열기
        </button>
      </li>
      <li>
        <span>
          <component :is="KlicIcons.Smartphone" data-part="icon" aria-hidden="true" />
          모바일 앱
        </span>
        <button type="button" data-cmp-action="list-open" data-name="모바일 앱" data-part="btn" class="kv-neutral kv-sm">
          열기
        </button>
      </li>
    </ul>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
