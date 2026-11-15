<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="breadcrumb" data-kv-variant="collapsed" data-klic-component="breadcrumb" class="kn-breadcrumb">
    <nav aria-label="축약 경로" data-part="breadcrumb">
      <button type="button" data-klic-surface="control" data-kv-action="crumb"  data-part="btn">
        홈
      </button>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <details  data-part="details">
        <summary>
          상위 폴더
        </summary>
        <div>
          <div data-part="menu">
            <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
              프로젝트
            </button>
            <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
              제품 디자인
            </button>
            <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
              문서
            </button>
          </div>
        </div>
      </details>
      <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
      <span aria-current="page">
        컴포넌트
      </span>
    </nav>
    <p data-part="muted">
      생략된 경로는 메뉴에서 확인할 수 있습니다.
    </p>
  </div>
</template>
