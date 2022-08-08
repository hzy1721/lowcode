import { defineStore } from "pinia";
import type { VComponent } from "../components/EditorContent";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    page: {
      name: "home",
      type: "UIPage",
      props: {},
      styles: {},
    } as VComponent,
    activeComponent: "",
  }),
});
