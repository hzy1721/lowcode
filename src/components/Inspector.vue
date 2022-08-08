<script setup lang="ts">
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";
import { searchVcomponent, removeVcomponentById } from "./EditorContent";
import componentInfo from "@/assets/component_info.js";

const appStore = useAppStore();
const vcomponent = computed(() => searchVcomponent(appStore.activeComponent));
const propSchema = computed(() => {
  if (!vcomponent.value) {
    return undefined;
  }
  return componentInfo[vcomponent.value.type].propSchema;
});
</script>

<template>
  <div class="inspector">
    <div class="header">
      <h3 v-if="vcomponent">{{ vcomponent?.name }} ({{ vcomponent?.type }})</h3>
      <h3 v-else>未选中组件</h3>
      <el-popconfirm
        v-if="vcomponent && vcomponent.type !== 'UIPage'"
        title="确认要删除组件吗?"
        @confirm="removeVcomponentById(vcomponent!.name)"
        confirm-button-text="删除"
        cancel-button-text="取消"
        confirm-button-type="danger"
      >
        <template #reference>
          <el-button type="danger">删除</el-button>
        </template>
      </el-popconfirm>
    </div>
    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="属性">
        <div v-if="!vcomponent || !propSchema">没有可以设置的属性</div>
        <div v-else v-for="schema in propSchema" class="form-item">
          <div class="prop-name">
            {{ schema.name }}
            <span class="prop-desc">({{ schema.desc }})</span>:
          </div>
          <el-input-number
            v-if="schema.type === 'number'"
            v-model="vcomponent.props![schema.name]"
          />
          <el-input
            v-else-if="schema.type === 'string'"
            v-model="vcomponent.props![schema.name]"
          >
          </el-input>
          <el-switch
            v-else-if="schema.type === 'boolean'"
            v-model="vcomponent.props![schema.name]"
          />
          <el-select
            v-else-if="schema.type.endsWith('_select')"
            v-model="vcomponent.props![schema.name]"
          >
            <el-option
              v-for="option in schema.candidates"
              :key="option"
              :label="option"
              :value="option"
            />
          </el-select>
          <el-divider />
        </div>
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
  display: flex;
  flex-direction: column;

  > .header {
    display: flex;
    justify-content: space-between;
  }

  > .tabs {
    flex-grow: 1;
  }

  .prop-name {
    margin-bottom: 5px;
    font-family: "Lucida Console", Monaco, monospace;
  }

  .prop-desc {
    margin-top: 5px;
    font-size: 0.8em;
    color: var(--secondary-text-color);
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
