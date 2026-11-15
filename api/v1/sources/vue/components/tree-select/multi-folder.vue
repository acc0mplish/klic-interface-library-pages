<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tree-select" data-kv-variant="multi-folder" data-klic-component="tree-select" class="kn-tree-select">
    <header data-part="heading">
      <strong>
        공유할 폴더
      </strong>
    </header>
    <details open data-part="details">
      <summary>
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        제품 문서
      </summary>
      <div>
        <fieldset data-part="choices">
          <legend>
            필요한 항목 선택
          </legend>
          <label>
            <input type="checkbox" name="kv-export-tree-select-tree-select-multi-folder" value="기획 문서" checked data-part="checkbox">
            <span>
              <strong>
                기획 문서
              </strong>
            </span>
          </label>
          <label>
            <input type="checkbox" name="kv-export-tree-select-tree-select-multi-folder" value="디자인 문서"  data-part="checkbox">
            <span>
              <strong>
                디자인 문서
              </strong>
            </span>
          </label>
          <label>
            <input type="checkbox" name="kv-export-tree-select-tree-select-multi-folder" value="개발 문서"  data-part="checkbox">
            <span>
              <strong>
                개발 문서
              </strong>
            </span>
          </label>
        </fieldset>
      </div>
    </details>
    <details  data-part="details">
      <summary>
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        운영 문서
      </summary>
      <div>
        <fieldset data-part="choices">
          <legend>
            필요한 항목 선택
          </legend>
          <label>
            <input type="checkbox" name="kv-export-tree-select-tree-select-multi-folder" value="운영 매뉴얼" data-part="checkbox">
            <span>
              <strong>
                운영 매뉴얼
              </strong>
            </span>
          </label>
          <label>
            <input type="checkbox" name="kv-export-tree-select-tree-select-multi-folder" value="고객 가이드"  data-part="checkbox">
            <span>
              <strong>
                고객 가이드
              </strong>
            </span>
          </label>
        </fieldset>
      </div>
    </details>
    <output data-kv-selection aria-live="polite" data-part="output">
      기획 문서 선택됨
    </output>
  </div>
</template>
