<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="sidebar" data-kv-variant="inbox" data-klic-component="sidebar" class="kn-sidebar">
    <aside data-part="sidebar">
      <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
        <component :is="KlicIcons.Plus" data-part="icon" aria-hidden="true" />
        새 메시지
      </button>
      <nav aria-label="예제 탐색" data-part="nav">
        <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
          받은 메시지 · 12
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          중요 표시 · 3
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          보낸 메시지
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          보관함
        </button>
      </nav>
      <output aria-live="polite" data-part="output">
        받은 메시지 · 12
      </output>
      <details open data-part="details">
        <summary>
          팀 채널
        </summary>
        <div>
          <ul data-part="list">
            <li>
              제품 디자인
            </li>
            <li>
              개발 소식
            </li>
            <li>
              전체 공지
            </li>
          </ul>
        </div>
      </details>
    </aside>
  </div>
</template>
