<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIEmpty",
});
</script>

<script setup lang="ts">
function dragenterHandler(e: DragEvent) {
  const node = e.target as HTMLElement;
  node.classList.add("dragover");
  const parent = node.parentElement;
  const classes = ['near-top', 'near-bottom', 'near-left', 'near-right'];
  classes.forEach((cls) => {
    parent?.classList.remove(cls);
  });
  parent?.classList.add('inner');
}

function dragleaveHandler(e: DragEvent) {
  const node = e.target as HTMLElement;
  node.classList.remove("dragover");
  const parent = node.parentElement;
  parent?.classList.remove('inner');
}

function dragoverHandler(e: DragEvent) {
  e.stopPropagation();
  e.preventDefault();
}
</script>

<template>
  <div
    class="ui-empty"
    @dragenter="dragenterHandler"
    @dragleave="dragleaveHandler"
    @dragover="dragoverHandler"
  >
    <div>拖拽组件到这里</div>
  </div>
</template>

<style lang="scss" scoped>
.ui-empty {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
}

.ui-empty.dragover {
  background-color: #c1c1c1;
}
</style>
