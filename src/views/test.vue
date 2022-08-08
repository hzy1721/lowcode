<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Test",
});
</script>

<script setup lang="ts">
const color = ref();
</script>

<template>
  <el-color-picker v-model="color" />
</template>

<style lang="scss" scoped>

</style>