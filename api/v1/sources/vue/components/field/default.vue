<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <form novalidate data-klic-component="field" class="kn-field">
    <div>
      <label for="export-field-default-email" data-part="label">
        이메일 주소
        <span aria-hidden="true" data-part="field-required">
          *
        </span>
      </label>
      <input data-klic-publishing-target="field-email" id="export-field-default-email" type="email" name="email" value="hello@klic" required aria-invalid="true" aria-describedby="export-field-default-error" data-part="input">
      <p id="export-field-default-error" data-part="error">
        <component :is="KlicIcons.CircleAlert" data-part="icon" />
        <span>
          올바른 이메일 주소를 입력해주세요.
        </span>
      </p>
    </div>
    <button type="submit" class="kv-neutral kv-sm" data-part="btn">
      이메일 확인
      <component :is="KlicIcons.ArrowRight" data-part="icon" />
    </button>
  </form>
</template>
