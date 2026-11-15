<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="collapsible" data-kv-variant="advanced" data-klic-component="collapsible" class="kn-collapsible">
    <label data-part="field">
      <span>
        프로젝트 이름
      </span>
      <input type="text" value="새 프로젝트"  data-part="input">
    </label>
    <details  data-part="details">
      <summary>
        고급 설정
      </summary>
      <div>
        <label data-part="field">
          <span>
            보관 기간
          </span>
          <select data-part="select">
            <option>
              30일
            </option>
            <option>
              90일
            </option>
            <option>
              계속 보관
            </option>
          </select>
        </label>
        <fieldset data-part="choices">
          <legend>
            필요한 항목 선택
          </legend>
          <label>
            <input type="checkbox" name="kv-export-collapsible-collapsible-advanced" value="변경 기록 남기기" checked data-part="checkbox">
            <span>
              <strong>
                변경 기록 남기기
              </strong>
            </span>
          </label>
        </fieldset>
      </div>
    </details>
  </div>
</template>
