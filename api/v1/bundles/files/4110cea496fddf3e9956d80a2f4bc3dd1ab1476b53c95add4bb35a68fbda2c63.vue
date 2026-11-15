<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="calendar" data-kv-variant="week" data-klic-component="calendar" class="kn-calendar">
    <header data-part="heading">
      <strong>
        이번 주 계획
      </strong>
    </header>
    <div data-part="week">
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            월
          </strong>
        </header>
        <span data-part="badge">
          10:00
        </span>
        <p data-part="muted">
          디자인 리뷰
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            화
          </strong>
        </header>
        <span data-part="badge">
          10:00
        </span>
        <p data-part="muted">
          개발 협의
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            수
          </strong>
        </header>
        <span data-part="badge">
          10:00
        </span>
        <p data-part="muted">
          사용자 인터뷰
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            목
          </strong>
        </header>
        <span data-part="badge">
          10:00
        </span>
        <p data-part="muted">
          문서 정리
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            금
          </strong>
        </header>
        <span data-part="badge">
          10:00
        </span>
        <p data-part="muted">
          주간 회고
        </p>
      </section>
    </div>
  </div>
</template>
