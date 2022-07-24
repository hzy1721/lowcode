<script setup lang="ts">
import LibraryPanel from "../components/LibraryPanel.vue";
import TreePanel from "../components/TreePanel.vue";
import Editor from "../components/Editor.vue";
import Inspector from "../components/Inspector.vue";
</script>

<template>
  <el-container class="container">
    <el-header class="header">
      <RouterLink to="/" class="logo">
        <span style="color: #4285f4">501 </span>
        <span style="color: #ea4235">Low </span>
        <span style="color: #fbbc04">Code </span>
        <span style="color: #34a853">Platform</span>
      </RouterLink>
      <div class="btn-group">
        <el-button> 保存到本地 </el-button>
        <el-button type="primary"> 预览 </el-button>
        <el-button type="primary"> 构建 </el-button>
      </div>
    </el-header>
    <el-main class="main">
      <el-row class="main-row">
        <el-col :span="5" class="left-panel">
          <LibraryPanel />
          <TreePanel />
        </el-col>
        <el-col :span="15">
          <Editor />
        </el-col>
        <el-col :span="4">
          <Inspector />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  border-bottom: 1px solid var(--base-border-color);

  > .logo {
    font-family: "Montserrat", sans-serif;
    font-weight: bolder;
    font-size: 1.4em;
  }
}

.main {
  padding: 0;
  height: calc(100vh - 60px);

  > .main-row {
    height: 100%;
  }
}
</style>
