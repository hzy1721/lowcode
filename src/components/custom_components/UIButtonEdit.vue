<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIButtonEdit",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
  onClick: (payload: MouseEvent) => void;
}>();
</script>

<template>
  <div style="display: inline-block;">
    <el-button style="pointer-events: none">{{ text }}</el-button>
  </div>
</template>

<style lang="scss" scoped>

</style>