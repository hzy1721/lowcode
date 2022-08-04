import { defineComponent, h, resolveComponent, type VNode } from "vue";
import componentInfo from "@/assets/component_info";

// 假设是从后端请求到的页面 JSON
const page = {
  name: "home",
  type: "UIPage",
  children: [
    {
      name: "header",
      type: "UIBlock",
      children: [
        {
          name: "page title",
          type: "UIH1",
          props: {
            text: "页面标题",
          },
        },
        {
          name: "page subtitle",
          type: "UIH3",
          props: {
            text: "子标题",
          },
        },
        // {
        //   name: "test link",
        //   type: "UILink",
        //   props: {
        //     text: "测试链接",
        //     href: "https://baidu.com",
        //   },
        // },
        // {
        //   name: "test text",
        //   type: "UIText",
        //   props: {
        //     text: "测试文本",
        //   },
        // },
      ],
    },
    {
      name: "main",
      type: "UIBlock",
      children: [
        // {
        //   name: "test image",
        //   type: "Image",
        // },
        {
          name: "test button",
          type: "UIButton",
          props: {
            text: "测试按钮",
            onClick: (e: MouseEvent) => {
              alert("button clicked");
            },
          },
        },
        {
          name: "test elementplus",
          type: "ElCalendar",
        },
      ],
    },
  ],
};

interface IVComponent {
  name: string;
  type: string;
  props?: Record<string, any>;
  children?: IVComponent[];
}

function blockNearEdge(node: HTMLElement, e: DragEvent) {
  const topDist = e.offsetY,
    bottomDist = node.clientHeight - e.offsetY;
  node.classList.remove("near-top");
  node.classList.remove("near-bottom");
  node.classList.add(topDist < bottomDist ? "near-top" : "near-bottom");
}

function inlineNearEdge(node: HTMLElement, e: DragEvent) {
  const leftDist = e.offsetX,
    rightDist = node.clientWidth - e.offsetX;
  node.classList.remove("near-left");
  node.classList.remove("near-right");
  node.classList.add(leftDist < rightDist ? "near-left" : "near-right");
}

const editableProps = (vcomponent: IVComponent) => {
  const dragNearEdge =
    componentInfo[vcomponent.type].editType === "block"
      ? blockNearEdge
      : inlineNearEdge;
  return {
    onMouseenter: (e: MouseEvent) => {
      const node = e.target as HTMLElement;
      node.parentElement?.classList.remove("hover");
      node.classList.add("hover");
    },
    onMouseleave: (e: MouseEvent) => {
      const node = e.target as HTMLElement;
      node.classList.remove("hover");
      node.parentElement?.classList.add("hover");
    },
    onDragover: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        dragNearEdge(node, e);
        e.stopPropagation();
      }
      e.preventDefault();
    },
    onDrop: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        const classes = ["near-left", "near-top", "near-right", "near-bottom"];
        classes.forEach((cls) => {
          if (node.classList.contains(cls)) {
            console.log("dropped!!!");
            node.classList.remove(cls);
          }
        });
        e.stopPropagation();
      }
    },
    onDragleave: (e: DragEvent) => {
      const node = e.currentTarget as HTMLElement;
      if (node.classList.contains("root")) {
        const classes = ["near-left", "near-top", "near-right", "near-bottom"];
        classes.forEach((cls) => node.classList.remove(cls));
        e.stopPropagation();
      }
    },
  };
};

function renderDeep(vcomponent: IVComponent): VNode {
  const children: VNode[] = [];
  vcomponent.children?.forEach((child) => {
    children.push(renderDeep(child));
  });
  return h(
    resolveComponent(vcomponent.type),
    { ...vcomponent.props, ...editableProps(vcomponent), class: "root" },
    () => children
  );
}

function render() {
  return renderDeep(page);
}

export default defineComponent({
  name: "EditorContent",
  setup() {
    return render;
  },
});
