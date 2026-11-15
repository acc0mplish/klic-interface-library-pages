<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="banner" data-kv-variant="announcement" data-klic-component="banner" class="kn-banner">
    <section data-part="banner">
      <span data-part="eyebrow">
        WHAT'S NEW
      </span>
      <header data-part="heading">
        <strong>
          더 많은 형태, 더 쉬운 선택
        </strong>
        <p data-part="muted">
          컴포넌트별로 다양한 사용 장면을 확인하세요.
        </p>
      </header>
      <details  data-part="details">
        <summary>
          업데이트 요약
        </summary>
        <div>
          <ul data-part="list">
            <li>
              형태별 네이티브 예제
            </li>
            <li>
              정확한 코드 복사
            </li>
            <li>
              반응형 가족 갤러리
            </li>
          </ul>
        </div>
      </details>
    </section>
  </div>
</template>
