<script setup lang="ts">

</script>

<template>
  <div class="inspector">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="属性"></el-tab-pane>
      <el-tab-pane label="样式"></el-tab-pane>
      <el-tab-pane label="事件"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.inspector {
  height: 100%;
  border-left: 1px solid var(--base-border-color);
  padding: 1em;

  > .tabs {
    height: 100%;
  }
}
</style>