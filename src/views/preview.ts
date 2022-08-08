import { useAppStore } from "@/stores/app";
import { defineComponent, h, resolveComponent, type VNode } from "vue";
import type { VComponent } from "../components/EditorContent";

export default defineComponent({
  name: "EditorContent",
  data() {
    return {
      appStore: useAppStore(),
    };
  },
  render() {
    return this.renderDeep(this.appStore.page);
  },
  methods: {
    renderDeep(vcomponent: VComponent): VNode {
      const children: VNode[] = [];
      vcomponent.children?.forEach((child) => {
        children.push(this.renderDeep(child));
      });
      return h(
        resolveComponent(vcomponent.type),
        {
          ...vcomponent.props,
          style: {
            ...vcomponent.styles,
          },
        },
        children.length > 0 ? () => children : undefined
      );
    },
  },
});
