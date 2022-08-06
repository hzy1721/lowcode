<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIButton",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
  onClick: (payload: MouseEvent) => void;
}>();
</script>

<template>
  <el-button @click="onClick" :plain="true">{{ text }}</el-button>
</template>

<style lang="scss" scoped>

</style>