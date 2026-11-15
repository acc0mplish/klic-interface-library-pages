<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="rating" data-kv-variant="stars" data-klic-component="rating" class="kn-rating">
    <header data-part="heading">
      <strong>
        이번 경험은 어땠나요?
      </strong>
    </header>
    <fieldset data-part="choices">
      <legend>
        한 가지 선택
      </legend>
      <label>
        <input type="radio" name="kv-export-rating-rating-stars" value="1 ★" checked data-part="radio">
        <span>
          <strong>
            1 ★
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-rating-rating-stars" value="2 ★★"  data-part="radio">
        <span>
          <strong>
            2 ★★
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-rating-rating-stars" value="3 ★★★"  data-part="radio">
        <span>
          <strong>
            3 ★★★
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-rating-rating-stars" value="4 ★★★★"  data-part="radio">
        <span>
          <strong>
            4 ★★★★
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-rating-rating-stars" value="5 ★★★★★"  data-part="radio">
        <span>
          <strong>
            5 ★★★★★
          </strong>
        </span>
      </label>
    </fieldset>
    <output data-kv-selection aria-live="polite" data-part="output">
      1점 선택됨
    </output>
  </div>
</template>
