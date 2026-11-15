<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bottom-navigation" data-kv-variant="floating" data-klic-component="bottom-navigation" class="kn-bottom-navigation">
    <div data-part="mobile-scene">
      <header data-part="heading">
        <strong>
          발견하기
        </strong>
        <p data-part="muted">
          팀에 도움이 되는 문서를 찾아보세요.
        </p>
      </header>
      <div role="img" aria-label="오늘의 인사이트" data-part="art">
        <span>
          KLIC
        </span>
        <strong>
          오늘의 인사이트
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <nav aria-label="앱 주요 탐색" data-part="bottom-nav bottom-pill">
        <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
          <component :is="KlicIcons.Compass" data-part="icon" aria-hidden="true" />
          <span>
            발견
          </span>
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          <component :is="KlicIcons.Bookmark" data-part="icon" aria-hidden="true" />
          <span>
            보관
          </span>
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          <component :is="KlicIcons.User" data-part="icon" aria-hidden="true" />
          <span>
            내 계정
          </span>
        </button>
      </nav>
      <output aria-live="polite" data-part="output">
        발견
      </output>
    </div>
  </div>
</template>
