<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="navigation-menu" data-kv-variant="resource-columns" data-klic-component="navigation-menu" class="kn-navigation-menu">
    <nav aria-label="리소스 탐색" class="ku-grid-2" data-part="grid-2">
      <section>
        <header data-part="heading">
          <strong>
            만들기
          </strong>
        </header>
        <button type="button" data-kv-action="choose" data-part="nav-card btn">
          <component :is="KlicIcons.PenTool" data-part="icon" aria-hidden="true" />
          <span>
            <strong>
              디자인 가이드
            </strong>
            <small>
              일관된 표현
            </small>
          </span>
        </button>
        <button type="button" data-kv-action="choose" data-part="nav-card btn">
          <component :is="KlicIcons.Code" data-part="icon" aria-hidden="true" />
          <span>
            <strong>
              구현 가이드
            </strong>
            <small>
              네이티브 패턴
            </small>
          </span>
        </button>
      </section>
      <section>
        <header data-part="heading">
          <strong>
            함께하기
          </strong>
        </header>
        <button type="button" data-kv-action="choose" data-part="nav-card btn">
          <component :is="KlicIcons.CheckCheck" data-part="icon" aria-hidden="true" />
          <span>
            <strong>
              검토 기준
            </strong>
            <small>
              접근성 확인
            </small>
          </span>
        </button>
        <button type="button" data-kv-action="choose" data-part="nav-card btn">
          <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
          <span>
            <strong>
              팀 운영
            </strong>
            <small>
              역할과 권한
            </small>
          </span>
        </button>
      </section>
    </nav>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
