<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bottom-navigation" data-kv-variant="labeled" data-klic-component="bottom-navigation" class="kn-bottom-navigation">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          오늘의 작업
        </strong>
      </header>
      <div class="ku-row" data-part="row">
        <span>
          진행 중
        </span>
        <span>
          <span data-part="badge">
            4
          </span>
        </span>
      </div>
      <div class="ku-row" data-part="row">
        <span>
          검토 요청
        </span>
        <span>
          <span data-part="badge">
            2
          </span>
        </span>
      </div>
    </section>
    <nav aria-label="앱 주요 탐색" data-part="bottom-nav">
      <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
        <component :is="KlicIcons.House" data-part="icon" aria-hidden="true" />
        <span>
          홈
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        <span>
          프로젝트
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.Bell" data-part="icon" aria-hidden="true" />
        <span>
          알림
        </span>
      </button>
      <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
        <component :is="KlicIcons.User" data-part="icon" aria-hidden="true" />
        <span>
          내 정보
        </span>
      </button>
    </nav>
    <output aria-live="polite" data-part="output">
      홈
    </output>
  </div>
</template>
