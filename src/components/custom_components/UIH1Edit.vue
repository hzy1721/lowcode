<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH1Edit",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style lang="scss" scoped></style>
