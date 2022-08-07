<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UIH6Edit",
});
</script>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h6>{{ text }}</h6>
</template>

<style lang="scss" scoped></style>
