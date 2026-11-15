<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="navigation-menu" data-kv-variant="icon-directory" data-klic-component="navigation-menu" class="kn-navigation-menu">
    <nav aria-label="주요 영역" data-part="nav-card-grid">
      <button type="button" data-kv-action="choose" data-part="nav-card btn">
        <component :is="KlicIcons.House" data-part="icon" aria-hidden="true" />
        <span>
          <strong>
            대시보드
          </strong>
          <small>
            팀의 오늘을 한눈에
          </small>
        </span>
      </button>
      <button type="button" data-kv-action="choose" data-part="nav-card btn">
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        <span>
          <strong>
            프로젝트
          </strong>
          <small>
            진행 중인 작업
          </small>
        </span>
      </button>
      <button type="button" data-kv-action="choose" data-part="nav-card btn">
        <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
        <span>
          <strong>
            멤버
          </strong>
          <small>
            협업하는 사람들
          </small>
        </span>
      </button>
      <button type="button" data-kv-action="choose" data-part="nav-card btn">
        <component :is="KlicIcons.Settings" data-part="icon" aria-hidden="true" />
        <span>
          <strong>
            설정
          </strong>
          <small>
            팀 환경 관리
          </small>
        </span>
      </button>
    </nav>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
