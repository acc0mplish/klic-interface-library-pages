<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toolbar" data-kv-variant="text-editor" data-klic-component="toolbar" class="kn-toolbar">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          텍스트 미리 보기
        </strong>
      </header>
      <p data-kv-format-target>
        명확한 인터페이스를 함께 만듭니다.
      </p>
    </section>
    <div role="toolbar" aria-label="본문 서식" data-part="toolbar">
      <button type="button" data-klic-surface="control" data-kv-action="format" aria-label="굵게" data-kv-format="bold" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.Bold" data-part="icon" aria-hidden="true" />
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="format" aria-label="기울임" data-kv-format="italic" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.Italic" data-part="icon" aria-hidden="true" />
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="format" aria-label="밑줄" data-kv-format="underline" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.Underline" data-part="icon" aria-hidden="true" />
      </button>
      <span role="separator" aria-orientation="vertical" data-part="divider-v">
      </span>
      <button type="button" data-klic-surface="control" data-kv-action="copy-text" aria-label="본문 복사" data-kv-value="명확한 인터페이스를 함께 만듭니다." data-part="btn">
        <component :is="KlicIcons.Copy" data-part="icon" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
