<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="list" data-kv-variant="media" data-klic-component="list" class="kn-list">
    <ul data-part="media-list">
      <li>
        <span data-part="media-thumb">
          01
        </span>
        <div>
          <strong>
            디자인 시스템 소개
          </strong>
          <p data-part="muted">
            팀 가이드 · 5분 읽기
          </p>
        </div>
      </li>
      <li>
        <span data-part="media-thumb">
          02
        </span>
        <div>
          <strong>
            토큰을 연결하는 방법
          </strong>
          <p data-part="muted">
            팀 가이드 · 5분 읽기
          </p>
        </div>
      </li>
      <li>
        <span data-part="media-thumb">
          03
        </span>
        <div>
          <strong>
            접근성 검토 시작
          </strong>
          <p data-part="muted">
            팀 가이드 · 5분 읽기
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
