<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="accordion" data-kv-variant="outline" data-klic-component="accordion" class="kn-accordion">
    <header data-part="heading">
      <strong>
        디자인 시스템 가이드
      </strong>
    </header>
    <details open data-part="details">
      <summary>
        01 · 시작하기
      </summary>
      <div>
        <ul data-part="list">
          <li>
            설치와 연결
          </li>
          <li>
            팀 설정
          </li>
          <li>
            첫 프로젝트
          </li>
        </ul>
      </div>
    </details>
    <details  data-part="details">
      <summary>
        02 · 디자인 토큰
      </summary>
      <div>
        <ul data-part="list">
          <li>
            컬러
          </li>
          <li>
            타이포그래피
          </li>
          <li>
            간격과 곡률
          </li>
        </ul>
      </div>
    </details>
    <details  data-part="details">
      <summary>
        03 · 접근성
      </summary>
      <div>
        <ul data-part="list">
          <li>
            키보드 탐색
          </li>
          <li>
            레이블과 설명
          </li>
        </ul>
      </div>
    </details>
  </div>
</template>
