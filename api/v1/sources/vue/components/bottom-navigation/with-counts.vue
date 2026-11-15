<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bottom-navigation" data-kv-variant="with-counts" data-klic-component="bottom-navigation" class="kn-bottom-navigation">
    <header data-part="heading">
      <strong>
        팀 메시지
      </strong>
      <p data-part="muted">
        새로운 대화를 확인하세요.
      </p>
    </header>
    <ul data-part="list">
      <li>
        김하늘 · 디자인 리뷰 안내
      </li>
      <li>
        이도윤 · 코드 검토 요청
      </li>
    </ul>
    <nav aria-label="앱 주요 탐색" data-part="bottom-nav">
      <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
        <component :is="KlicIcons.Inbox" data-part="icon" aria-hidden="true" />
        <span>
          받은함
          <b data-part="nav-count">
            12
          </b>
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.MessageCircle" data-part="icon" aria-hidden="true" />
        <span>
          멘션
          <b data-part="nav-count">
            3
          </b>
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.Star" data-part="icon" aria-hidden="true" />
        <span>
          중요
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.Archive" data-part="icon" aria-hidden="true" />
        <span>
          보관
        </span>
      </button>
    </nav>
    <output aria-live="polite" data-part="output">
      받은함
    </output>
  </div>
</template>
