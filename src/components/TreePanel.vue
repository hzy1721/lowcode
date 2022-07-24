<script setup lang="ts">
interface Tree {
  label: string
  children?: Tree[]
}

const data: Tree[] = [
  {
    label: '页面',
    children: [
      {
        label: 'Header',
        children: [
          {
            label: 'Logo',
          },
          {
            label: "Menu"
          }
        ],
      },
      {
        label: "Content",
        children: [
          {
            label: "文章"
          }
        ]
      },
      {
        label: "Footer"
      }
    ],
  },
]
</script>

<template>
  <div class="tree-panel">
    <h3>组件树</h3>
    <el-tree :data="data" class="tree"></el-tree>
  </div>
</template>

<style lang="scss" scoped>
.tree-panel {
  border-style: solid;
  border-width: 0 1px 0 0;
  padding: 1em;
  height: 45%;
}

h3 {
  margin-bottom: .5em;
}

.tree {
  overflow: auto;
}
</style>