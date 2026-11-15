<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="password-input" data-kv-variant="signin" data-klic-component="password-input" class="kn-password-input">
    <form data-kv-form>
      <label data-part="field">
        <span>
          이메일
        </span>
        <input type="email" value="" required autocomplete="username" data-part="input">
      </label>
      <label data-part="field">
        <span>
          비밀번호
        </span>
        <input type="password" value="" required autocomplete="current-password" data-part="input">
      </label>
      <fieldset data-part="choices">
        <legend>
          필요한 항목 선택
        </legend>
        <label>
          <input type="checkbox" name="kv-export-password-input-password-input-signin" value="로그인 상태 유지" checked data-part="checkbox">
          <span>
            <strong>
              로그인 상태 유지
            </strong>
          </span>
        </label>
      </fieldset>
      <button type="submit" class="kv-primary" data-part="btn">
        입력 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
