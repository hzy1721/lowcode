<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UILinkEdit",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string,
  url: string
}>();
</script>

<template>
  <span>
    <a :href="url" style="pointer-events: none">{{ text }}</a>
  </span>
</template>

<style lang="scss" scoped></style>
