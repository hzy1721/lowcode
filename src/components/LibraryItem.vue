<script setup lang="ts">
defineProps<{
  component: { name: string, zh: string }
}>();
</script>

<template>
  <div class="library-item" draggable="true">
    <div class="name">{{ component.name }}</div>
    <div class="zh">{{ component.zh }}</div>
  </div>
</template>

<style lang="scss">
.library-item {
  display: inline-block;
  width: 33.3%;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 1px 0;
  margin: 0 -1px 0 0;
  padding: .5em;

  > .name {
    color: var(--brand-color);
    margin-bottom: .3em;
  }

  > .zh {
    font-size: .8em;
  }
}

.library-item:nth-child(-n+3) {
  border-top-width: 1px;
}

.library-item:nth-child(3n+1) {
  border-left-width: 1px;
}
</style>