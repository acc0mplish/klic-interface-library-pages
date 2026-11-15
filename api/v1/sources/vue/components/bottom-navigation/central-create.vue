<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bottom-navigation" data-kv-variant="central-create" data-klic-component="bottom-navigation" class="kn-bottom-navigation">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          프로젝트
        </strong>
      </header>
      <p data-part="muted">
        새로운 아이디어를 작업으로 연결하세요.
      </p>
    </section>
    <div data-part="bottom-create">
      <nav aria-label="앱 주요 탐색" data-part="bottom-nav">
        <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
          <component :is="KlicIcons.House" data-part="icon" aria-hidden="true" />
          <span>
            홈
          </span>
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
          <span>
            검색
          </span>
        </button>
      </nav>
      <output aria-live="polite" data-part="output">
        홈
      </output>
      <button type="button" data-klic-surface="control" data-kv-action="open" data-kv-target="kv-export-bottom-navigation-bottom-navigation-central-create-dialog" data-part="btn">
        +
      </button>
      <dialog id="kv-export-bottom-navigation-bottom-navigation-central-create-dialog" aria-label="새 작업" data-klic-surface="overlay" data-part="dialog">
        <header data-part="heading">
          <strong>
            새 작업
          </strong>
        </header>
        <form data-kv-form>
          <label data-part="field">
            <span>
              작업 이름
            </span>
            <input type="text" value="" required data-part="input">
          </label>
          <button type="submit" class="kv-primary" data-part="btn">
            작업 준비
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
      <nav aria-label="앱 주요 탐색" data-part="bottom-nav">
        <button type="button" data-kv-action="nav" aria-current="page" data-part="btn">
          <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
          <span>
            자료
          </span>
        </button>
        <button type="button" data-kv-action="nav" aria-current="false" data-part="btn">
          <component :is="KlicIcons.User" data-part="icon" aria-hidden="true" />
          <span>
            나
          </span>
        </button>
      </nav>
      <output aria-live="polite" data-part="output">
        자료
      </output>
    </div>
  </div>
</template>
