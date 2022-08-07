<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIDividerEdit",
});
</script>

<script setup lang="ts"></script>

<template>
  <div class="ui-divider">
    <el-divider style="pointer-events: none"></el-divider>
  </div>
</template>

<style lang="scss" scoped>
.ui-divider {
  padding: 5px 0;
}
</style>
