<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="select" data-kv-variant="dependent" data-klic-component="select" class="kn-select">
    <label data-part="field">
      <span>
        부서
      </span>
      <select data-kv-dependent data-part="select">
        <option>
          제품
        </option>
        <option>
          운영
        </option>
      </select>
    </label>
    <label data-part="field">
      <span>
        담당 팀
      </span>
      <select data-kv-dependent-target data-part="select">
        <option>
          디자인
        </option>
        <option>
          개발
        </option>
      </select>
    </label>
  </div>
</template>
