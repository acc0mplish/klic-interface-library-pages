<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="navigation-menu" data-kv-variant="mega-docs" data-klic-component="navigation-menu" class="kn-navigation-menu">
    <nav aria-label="문서 탐색" data-part="mega-nav">
      <details open data-part="details">
        <summary>
          시작하기
        </summary>
        <div>
          <div data-part="nav-card-grid">
            <button type="button" data-kv-action="choose" data-part="nav-card btn">
              <component :is="KlicIcons.BookOpen" data-part="icon" aria-hidden="true" />
              <span>
                <strong>
                  소개
                </strong>
                <small>
                  KLIC의 구성과 원칙
                </small>
              </span>
            </button>
            <button type="button" data-kv-action="choose" data-part="nav-card btn">
              <component :is="KlicIcons.Layers" data-part="icon" aria-hidden="true" />
              <span>
                <strong>
                  디자인 토큰
                </strong>
                <small>
                  기초 스타일 연결
                </small>
              </span>
            </button>
            <button type="button" data-kv-action="choose" data-part="nav-card btn">
              <component :is="KlicIcons.LayoutGrid" data-part="icon" aria-hidden="true" />
              <span>
                <strong>
                  컴포넌트
                </strong>
                <small>
                  형태별 예제 탐색
                </small>
              </span>
            </button>
          </div>
        </div>
      </details>
      <details  data-part="details">
        <summary>
          팀 리소스
        </summary>
        <div>
          <button type="button" data-kv-action="choose" data-part="nav-card btn">
            <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
            <span>
              <strong>
                운영 가이드
              </strong>
              <small>
                협업과 검토 흐름
              </small>
            </span>
          </button>
          <button type="button" data-kv-action="choose" data-part="nav-card btn">
            <component :is="KlicIcons.History" data-part="icon" aria-hidden="true" />
            <span>
              <strong>
                릴리스 노트
              </strong>
              <small>
                최신 변경 사항
              </small>
            </span>
          </button>
        </div>
      </details>
    </nav>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
