<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle-group" data-kv-variant="display-options" data-klic-component="toggle-group" class="kn-toggle-group">
    <header data-part="heading">
      <strong>
        카드에 표시할 정보
      </strong>
    </header>
    <div role="group" aria-label="카드 정보" data-part="toggle-grid">
      <button type="button" data-kv-action="toggle" aria-pressed="false" data-part="toggle-tile btn">
        <component :is="KlicIcons.User" data-part="icon" aria-hidden="true" />
        <strong>
          담당자
        </strong>
      </button>
      <button type="button" data-kv-action="toggle" aria-pressed="false" data-part="toggle-tile btn">
        <component :is="KlicIcons.Calendar" data-part="icon" aria-hidden="true" />
        <strong>
          마감일
        </strong>
      </button>
      <button type="button" data-kv-action="toggle" aria-pressed="false" data-part="toggle-tile btn">
        <component :is="KlicIcons.MessageCircle" data-part="icon" aria-hidden="true" />
        <strong>
          댓글
        </strong>
      </button>
      <button type="button" data-kv-action="toggle" aria-pressed="false" data-part="toggle-tile btn">
        <component :is="KlicIcons.Paperclip" data-part="icon" aria-hidden="true" />
        <strong>
          첨부
        </strong>
      </button>
    </div>
  </div>
</template>
