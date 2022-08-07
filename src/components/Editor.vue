<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import EditorContent from "./EditorContent";

function clickHandler(e: MouseEvent) {
  const node = e.target as HTMLElement;
  if (node.classList.contains("root")) {
    const appStore = useAppStore();
    appStore.activeComponent = node.id;
    e.stopPropagation();
  }
}
</script>

<template>
  <div class="editor" ref="editor">
    <EditorContent @click="clickHandler" />
  </div>
</template>

<style lang="scss">
.editor {
  height: 100%;
  padding: 1em;

  .hover {
    outline: 1px dashed var(--hover-border-color);
  }

  .near-left {
    border-left: 3px solid var(--active-border-color);
  }
  .near-top {
    border-top: 3px solid var(--active-border-color);
  }
  .near-right {
    border-right: 3px solid var(--active-border-color);
  }
  .near-bottom {
    border-bottom: 3px solid var(--active-border-color);
  }

  .focus {
    outline: 2px solid var(--focus-border-color);
  }
}
</style>
