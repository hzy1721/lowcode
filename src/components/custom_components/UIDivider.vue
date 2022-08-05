<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIDivider",
});
</script>

<script setup lang="ts"></script>

<template>
  <div class="ui-divider">
    <el-divider></el-divider>
  </div>
</template>

<style lang="scss" scoped>
.ui-divider {
  padding: 5px 0;
}
</style>
