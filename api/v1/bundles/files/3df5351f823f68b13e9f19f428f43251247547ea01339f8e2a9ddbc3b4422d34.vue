<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toast" data-kv-variant="file" data-klic-component="toast" class="kn-toast">
    <button type="button" data-klic-surface="control" data-kv-action="toast-show"  data-part="btn">
      알림 다시 표시
    </button>
    <section data-kv-toast role="status" data-part="toast-box">
      <div>
        <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
        <header data-part="heading">
          <strong>
            파일 처리가 완료되었습니다
          </strong>
          <p data-part="muted">
            프로젝트 자료 12개를 가져왔습니다.
          </p>
        </header>
        <details  data-part="details">
          <summary>
            처리 내역
          </summary>
          <div>
            <ul data-part="list">
              <li>
                가이드.pdf
              </li>
              <li>
                명세.docx
              </li>
              <li>
                리뷰.txt
              </li>
            </ul>
          </div>
        </details>
      </div>
      <button type="button" data-klic-surface="control" data-kv-action="toast-close" aria-label="알림 닫기" data-part="btn">
        ×
      </button>
    </section>
  </div>
</template>
