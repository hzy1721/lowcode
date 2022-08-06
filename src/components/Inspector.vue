<script setup lang="ts">
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";
import { searchVcomponent } from "./EditorContent";
import componentInfo from "@/assets/component_info.js";

const appStore = useAppStore();
const vcomponent = computed(() => searchVcomponent(appStore.activeComponent));
const propsSchema = computed(() => {
  if (!vcomponent.value) {
    return undefined;
  }
  return componentInfo[vcomponent.value.type].propsSchema;
});

function debug() {
  console.log(vcomponent.value);
  console.log(propsSchema.value);
}
</script>

<template>
  <div class="inspector" @click="debug">
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="属性">
        <div v-if="!vcomponent || !propsSchema">没有可以设置的属性</div>
        <template v-else v-for="propSchema in propsSchema">
          <div class="prop-name">{{ propSchema.name }}:</div>
          <el-input
            v-if="propSchema.type === 'string'"
            v-model="vcomponent.props![propSchema.name]"
          >
          </el-input>
          <el-switch
            v-else-if="propSchema.type === 'boolean'"
            v-model="vcomponent.props![propSchema.name]"
          />
          <el-select
            v-else-if="propSchema.type.endsWith('_select')"
            v-model="vcomponent.props![propSchema.name]"
          >
            <el-option
              v-for="option in propSchema.candidates"
              :key="option"
              :label="option"
              :value="option"
            />
          </el-select>
          <div class="prop-desc">{{ propSchema.desc }}</div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="样式"></el-tab-pane>
      <el-tab-pane label="事件"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.inspector {
  height: 100%;
  border-left: 1px solid var(--base-border-color);
  padding: 1em;

  > .tabs {
    height: 100%;
  }

  .prop-name {
    margin-bottom: 5px;
    font-family: "Lucida Console", Monaco, monospace;
  }

  .prop-desc {
    margin-top: 5px;
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }
}
</style>
