<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="notification" data-kv-variant="grouped-inbox" data-klic-component="notification" class="kn-notification">
    <section data-part="notification">
      <div class="ku-row" data-part="row">
        <span>
          <strong>
            새 알림 3개
          </strong>
        </span>
        <span>
          <button type="button" data-klic-surface="control" data-kv-action="notification-all"  data-part="btn">
            모두 읽음
          </button>
        </span>
      </div>
      <ul data-part="list">
        <li data-kv-unread>
          ● 김하늘 · 문서 업데이트
        </li>
        <li data-kv-unread>
          ● 이도윤 · 리뷰 요청
        </li>
        <li data-kv-unread>
          ● 박서연 · 댓글 작성
        </li>
      </ul>
      <output aria-live="polite" data-part="output">
      </output>
    </section>
  </div>
</template>
