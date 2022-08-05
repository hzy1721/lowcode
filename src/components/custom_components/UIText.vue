<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIText",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <span>{{ text }}</span>
</template>

<style lang="scss" scoped></style>
