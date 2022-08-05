import {
  defineComponent,
  h,
  reactive,
  resolveComponent,
  type VNode,
} from "vue";
import componentInfo from "@/assets/component_info";

class VComponent {
  name: string;
  type: string;
  props?: Record<string, any>;
  children?: VComponent[];

  constructor(vcomponentType: string) {
    this.name = getUniqueName(vcomponentType);
    this.type = vcomponentType;
    this.props = componentInfo[vcomponentType].defaultProps;
  }
}

// 假设是从后端请求到的页面 JSON
const page: VComponent = reactive({
  name: "home",
  type: "UIPage",
  // children: [
  //   {
  //     name: "header",
  //     type: "UIBlock",
  //     children: [
  //       {
  //         name: "page title",
  //         type: "UIH1",
  //         props: {
  //           text: "页面标题",
  //         },
  //       },
  //       {
  //         name: "page subtitle",
  //         type: "UIH3",
  //         props: {
  //           text: "子标题",
  //         },
  //       },
  //       // {
  //       //   name: "test link",
  //       //   type: "UILink",
  //       //   props: {
  //       //     text: "测试链接",
  //       //     href: "https://baidu.com",
  //       //   },
  //       // },
  //       // {
  //       //   name: "test text",
  //       //   type: "UIText",
  //       //   props: {
  //       //     text: "测试文本",
  //       //   },
  //       // },
  //     ],
  //   },
  //   {
  //     name: "main",
  //     type: "UIBlock",
  //     children: [
  //       // {
  //       //   name: "test image",
  //       //   type: "Image",
  //       // },
  //       {
  //         name: "test button",
  //         type: "UIButton",
  //         props: {
  //           text: "测试按钮",
  //           onClick: (e: MouseEvent) => {
  //             alert("button clicked");
  //           },
  //         },
  //       },
  //       {
  //         name: "test elementplus",
  //         type: "ElCalendar",
  //       },
  //     ],
  //   },
  // ],
});

function generateNameCache(vcomponent: VComponent): Set<string> {
  if (!vcomponent.children) {
    return new Set();
  }
  const set: Set<string> = new Set();
  for (let i = 0; i < vcomponent.children.length; ++i) {
    const child = vcomponent.children[i];
    set.add(child.name);
    const subSet = generateNameCache(child);
    subSet.forEach((name) => {
      set.add(name);
    });
  }
  return set;
}

const nameSet = generateNameCache(page);

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

function layerIndices(vcomponent: VComponent, id: string): number[] {
  if (!vcomponent.children) {
    return [];
  }
  const tokens: number[] = [];
  for (let i = 0; i < vcomponent.children.length; ++i) {
    tokens.push(i);
    const child = vcomponent.children[i];
    if (child.name === id) {
      return tokens;
    }
    const subTokens = layerIndices(child, id);
    if (subTokens.length > 0) {
      return tokens.concat(subTokens);
    }
    tokens.pop();
  }
  return [];
}

function getUniqueName(vcomponentType: string): string {
  let name = vcomponentType,
    idx = 2;
  while (nameSet.has(name)) {
    name = name + idx;
    ++idx;
  }
  nameSet.add(name);
  return name;
}

function insertBeforeVcomponent(indices: number[], vcomponent: VComponent) {
  if (indices.length === 0) {
    return;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return;
    }
  }
  const beforeIndex = indices[indices.length - 1];
  targetChildren.splice(beforeIndex, 0, vcomponent);
}

function insertAfterVcomponent(indices: number[], vcomponent: VComponent) {
  if (indices.length === 0) {
    return;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return;
    }
  }
  const afterIndex = indices[indices.length - 1] + 1;
  if (afterIndex >= targetChildren.length) {
    targetChildren.push(vcomponent);
  } else {
    targetChildren.splice(afterIndex, 0, vcomponent);
  }
}

function insertInnerComponent(indices: number[], vcomponent: VComponent) {
  let target = page;
  for (let i = 0; i < indices.length; ++i) {
    if (!target.children) {
      return;
    }
    target = target.children[indices[i]];
  }
  target.children = [vcomponent];
}

function insertVcomponent(
  node: HTMLElement,
  area: "top" | "bottom" | "left" | "right" | "inner" | string,
  vcomponent: VComponent
) {
  const indices = layerIndices(page, node.id);
  if (area === "top" || area === "left") {
    insertBeforeVcomponent(indices, vcomponent);
  } else if (area === "bottom" || area === "right") {
    insertAfterVcomponent(indices, vcomponent);
  } else if (area === "inner") {
    insertInnerComponent(indices, vcomponent);
  }
}

function removeVcomponent(indices: number[]): VComponent {
  if (indices.length === 0) {
    return page;
  }
  let targetChildren = page.children!;
  for (let i = 0; i < indices.length - 1; ++i) {
    targetChildren = targetChildren[indices[i]].children!;
    if (!targetChildren) {
      return targetChildren;
    }
  }
  const index = indices[indices.length - 1];
  const result = targetChildren.splice(index, 1)[0];
  console.dir(page);
  return result;
}

function moveVcomponent(
  sourceIndices: number[],
  node: HTMLElement,
  area: "top" | "bottom" | "left" | "right" | "inner" | string
) {
  const vcomponent = removeVcomponent(sourceIndices);
  insertVcomponent(node, area, vcomponent);
}

const editableProps = (vcomponent: VComponent) => {
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
    onDragstart: (e: DragEvent) => {
      const node = e.target as HTMLElement;
      e.dataTransfer?.setData(
        "text/indices",
        JSON.stringify(layerIndices(page, node.id))
      );
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
        const classes = [
          "near-left",
          "near-top",
          "near-right",
          "near-bottom",
          "inner",
        ];
        for (let cls of classes) {
          if (node.classList.contains(cls)) {
            if (e.dataTransfer?.getData("text/plain")) {
              const vcomponentType = e.dataTransfer?.getData("text/plain");
              insertVcomponent(
                node,
                cls === "inner" ? "inner" : cls.slice(5),
                new VComponent(vcomponentType)
              );
            } else if (e.dataTransfer?.getData("text/indices")) {
              const sourceIndices = JSON.parse(
                e.dataTransfer.getData("text/indices")
              );
              moveVcomponent(
                sourceIndices,
                node,
                cls === "inner" ? "inner" : cls.slice(5)
              );
            }
            node.classList.remove(cls);
            break;
          }
        }
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

function renderDeep(vcomponent: VComponent): VNode {
  const children: VNode[] = [];
  vcomponent.children?.forEach((child) => {
    children.push(renderDeep(child));
  });
  return h(
    resolveComponent(vcomponent.type),
    {
      ...vcomponent.props,
      ...editableProps(vcomponent),
      class: "root",
      id: vcomponent.name,
      draggable: "true",
    },
    children.length > 0 ? () => children : undefined
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
