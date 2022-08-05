<script setup lang="ts">
import EditorContent from "./EditorContent";
</script>

<template>
  <div class="editor" ref="editor">
    <EditorContent />
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
}
</style>
