<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <section data-terminal-demo="ubuntu-terminal" data-terminal-instance="export-ubuntu-terminal-default" aria-label="Ubuntu 터미널 샘플 미리보기" data-klic-component="ubuntu-terminal" class="kn-ubuntu-terminal">
    <div data-part="terminal-ubuntu">
      <header data-part="terminal-ubuntu-header">
        <span aria-hidden="true" data-part="terminal-ubuntu-new">
          <component :is="KlicIcons.SquarePlus" data-part="icon" />
        </span>
        <strong data-part="terminal-ubuntu-title">
          klic@klic-design:/serverA/ch5
        </strong>
        <span aria-hidden="true" data-part="terminal-ubuntu-toolbar">
          <component :is="KlicIcons.Search" data-part="icon" />
          <component :is="KlicIcons.Menu" data-part="icon" />
        </span>
        <span aria-hidden="true" data-part="terminal-ubuntu-controls">
          <component :is="KlicIcons.Minus" data-part="icon" />
          <component :is="KlicIcons.Square" data-part="icon" />
          <component :is="KlicIcons.X" data-part="icon" />
        </span>
      </header>
      <div aria-label="Ubuntu 터미널의 정적 bash 파일 편집 예시" data-part="terminal-ubuntu-console">
        <pre>
          <code>
            <span data-part="terminal-ubuntu-line">
              #!/bin/bash
            </span>
            <span data-part="terminal-ubuntu-line">
              #hello.bash
            </span>
            <span data-part="terminal-ubuntu-line">
              echo &quot;Hello world!&quot;
            </span>
            <span data-part="terminal-ubuntu-line">
              printf &quot;hello world! 2\n&quot;
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
            <span data-part="terminal-ubuntu-line" data-state="empty">
              ~
            </span>
          </code>
        </pre>
      </div>
    </div>
  </section>
</template>
