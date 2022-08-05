<script lang="ts">
import { defineComponent, ref, type Ref } from "vue";

export default defineComponent({
  name: "UIPage",
});
</script>

<script setup lang="ts">
import UIEmpty from "./UIEmpty.vue";
</script>

<template>
  <div class="ui-page">
    <slot></slot>
    <UIEmpty v-if="!$slots.default" />
  </div>
</template>

<style lang="scss" scoped>
.ui-page {
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
