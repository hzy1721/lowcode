<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Test",
});
</script>

<script setup lang="ts">
import CodeEditor from "../components/CodeEditor.vue";
const color = ref();
</script>

<template>
  <CodeEditor />
</template>

<style lang="scss" scoped>

</style>