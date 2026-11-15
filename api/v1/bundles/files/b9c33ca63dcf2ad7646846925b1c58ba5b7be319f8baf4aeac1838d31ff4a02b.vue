<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="empty-state" data-kv-variant="first-project" data-klic-component="empty-state" class="kn-empty-state">
    <section data-part="empty">
      <component :is="KlicIcons.FolderPlus" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          첫 프로젝트를 만들어 보세요
        </strong>
        <p data-part="muted">
          프로젝트에 문서와 팀의 작업을 모을 수 있습니다.
        </p>
      </header>
      <button type="button" data-klic-surface="control" data-kv-action="open" data-kv-target="kv-export-empty-state-empty-state-first-project-dialog" data-part="btn">
        새 프로젝트
      </button>
      <dialog id="kv-export-empty-state-empty-state-first-project-dialog" aria-label="프로젝트 만들기" data-klic-surface="overlay" data-part="dialog">
        <header data-part="heading">
          <strong>
            프로젝트 만들기
          </strong>
        </header>
        <form data-kv-form>
          <label data-part="field">
            <span>
              프로젝트 이름
            </span>
            <input type="text" value="" required data-part="input">
          </label>
          <button type="submit" class="kv-primary" data-part="btn">
            생성
          </button>
          <output aria-live="polite" data-part="output">
          </output>
        </form>
        <footer class="ku-actions" data-part="actions">
          <button type="button" data-klic-surface="control" data-kv-action="close"  data-part="btn">
            닫기
          </button>
        </footer>
      </dialog>
    </section>
  </div>
</template>
