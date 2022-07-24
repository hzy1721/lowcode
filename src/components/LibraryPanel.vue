<script setup lang="ts">
import componentInfo from "@/assets/component.json";
import LibraryItem from "./LibraryItem.vue";
</script>

<template>
  <div class="library-panel">
    <h3>组件库</h3>
    <el-tabs>
      <el-tab-pane label="基础">
        <LibraryItem v-for="item in componentInfo.basic" :component="item" />
      </el-tab-pane>
      <el-tab-pane label="导航">
        <LibraryItem v-for="item in componentInfo.navigation" :component="item" />
      </el-tab-pane>
      <el-tab-pane label="数据">
        <LibraryItem v-for="item in componentInfo.data" :component="item" />
      </el-tab-pane>
      <el-tab-pane label="表单">
        <LibraryItem v-for="item in componentInfo.form" :component="item" />
      </el-tab-pane>
      <el-tab-pane label="反馈">
        <LibraryItem v-for="item in componentInfo.feedback" :component="item" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.library-panel {
  border-style: solid;
  border-width: 0 1px 1px 0;
  padding: 1em;
  height: 55%;
}
</style>
