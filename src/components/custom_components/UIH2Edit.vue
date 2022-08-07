<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH2Edit",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h2>{{ text }}</h2>
</template>

<style lang="scss" scoped></style>
