<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="accordion" data-kv-variant="settings-sections" data-klic-component="accordion" class="kn-accordion">
    <details open data-part="details">
      <summary>
        기본 정보
      </summary>
      <div>
        <form data-kv-form>
          <label data-part="field">
            <span>
              팀 이름
            </span>
            <input type="text" value="KLIC 팀" required data-part="input">
          </label>
          <button type="submit" class="kv-primary" data-part="btn">
            저장
          </button>
          <output aria-live="polite" data-part="output">
          </output>
        </form>
      </div>
    </details>
    <details  data-part="details">
      <summary>
        알림 설정
      </summary>
      <div>
        <fieldset data-part="choices">
          <legend>
            필요한 항목 선택
          </legend>
          <label>
            <input type="checkbox" name="kv-export-accordion-accordion-settings-sections" value="댓글 알림" checked data-part="checkbox">
            <span>
              <strong>
                댓글 알림
              </strong>
            </span>
          </label>
          <label>
            <input type="checkbox" name="kv-export-accordion-accordion-settings-sections" value="주간 보고서"  data-part="checkbox">
            <span>
              <strong>
                주간 보고서
              </strong>
            </span>
          </label>
        </fieldset>
      </div>
    </details>
  </div>
</template>
