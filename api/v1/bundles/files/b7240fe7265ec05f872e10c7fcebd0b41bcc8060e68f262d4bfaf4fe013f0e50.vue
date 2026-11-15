<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="avatar-group" data-kv-variant="invite" data-klic-component="avatar-group" class="kn-avatar-group">
    <div data-part="avatar-stack">
      <span aria-label="김" data-part="avatar">
        김
      </span>
      <span aria-label="이" data-part="avatar">
        이
      </span>
      <span aria-label="박" data-part="avatar">
        박
      </span>
    </div>
    <form data-kv-form>
      <label data-part="field">
        <span>
          초대 이메일
        </span>
        <input type="email" value="" required placeholder="name@company.com" data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        멤버 초대 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
