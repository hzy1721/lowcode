<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH4",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h4>{{ text }}</h4>
</template>

<style lang="scss" scoped></style>
