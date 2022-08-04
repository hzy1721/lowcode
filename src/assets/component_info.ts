interface IComponent {
  name: string;
  zh: string;
  editType: "block" | "inline";
}

const componentInfo: Record<string, IComponent> = {
  UIPage: {
    name: "Page",
    zh: "页面",
    editType: "block",
  },
  UIH1: {
    name: "H1",
    zh: "一级标题",
    editType: "block",
  },
  UIH2: {
    name: "H2",
    zh: "二级标题",
    editType: "block",
  },
  UIH3: {
    name: "H3",
    zh: "三级标题",
    editType: "block",
  },
  UIH4: {
    name: "H4",
    zh: "四级标题",
    editType: "block",
  },
  UIH5: {
    name: "H5",
    zh: "五级标题",
    editType: "block",
  },
  UIH6: {
    name: "H6",
    zh: "六级标题",
    editType: "block",
  },
  UIText: {
    name: "Text",
    zh: "文本",
    editType: "inline",
  },
  UILink: {
    name: "Link",
    zh: "链接",
    editType: "inline",
  },
  UIButton: {
    name: "Button",
    zh: "按钮",
    editType: "inline",
  },
  UIBlock: {
    name: "Block",
    zh: "区块",
    editType: "block",
  },
  ElDivider: {
    name: "Divider",
    zh: "分割线",
    editType: "block",
  },
  ElCalendar: {
    name: "Calendar",
    zh: "日历",
    editType: "block",
  },
};

export default componentInfo;
