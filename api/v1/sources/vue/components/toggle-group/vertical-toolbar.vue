<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle-group" data-kv-variant="vertical-toolbar" data-klic-component="toggle-group" class="kn-toggle-group">
    <div data-part="vertical-editor">
      <div role="group" aria-label="편집 서식" data-part="vertical-tools">
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="굵게" title="굵게" aria-pressed="false" data-part="btn">
          <component :is="KlicIcons.Bold" data-part="icon" aria-hidden="true" />
        </button>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="기울임" title="기울임" aria-pressed="false" data-part="btn">
          <component :is="KlicIcons.Italic" data-part="icon" aria-hidden="true" />
        </button>
        <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="밑줄" title="밑줄" aria-pressed="false" data-part="btn">
          <component :is="KlicIcons.Underline" data-part="icon" aria-hidden="true" />
        </button>
      </div>
      <article data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            팀의 언어를 정리하세요
          </strong>
        </header>
        <p data-part="muted">
          필요한 서식을 복수로 선택할 수 있습니다.
        </p>
      </article>
    </div>
  </div>
</template>
