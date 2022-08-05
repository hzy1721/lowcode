interface IComponent {
  name: string;
  zh: string;
  editType: "block" | "inline" | "inner";
  defaultProps?: Record<string, any>;
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
    defaultProps: {
      text: '一级标题'
    }
  },
  UIH2: {
    name: "H2",
    zh: "二级标题",
    editType: "block",
    defaultProps: {
      text: '二级标题'
    }
  },
  UIH3: {
    name: "H3",
    zh: "三级标题",
    editType: "block",
    defaultProps: {
      text: '三级标题'
    }
  },
  UIH4: {
    name: "H4",
    zh: "四级标题",
    editType: "block",
    defaultProps: {
      text: '四级标题'
    }
  },
  UIH5: {
    name: "H5",
    zh: "五级标题",
    editType: "block",
    defaultProps: {
      text: '五级标题'
    }
  },
  UIH6: {
    name: "H6",
    zh: "六级标题",
    editType: "block",
    defaultProps: {
      text: '六级标题'
    }
  },
  UIText: {
    name: "Text",
    zh: "文本",
    editType: "inline",
    defaultProps: {
      text: '文本'
    }
  },
  UILink: {
    name: "Link",
    zh: "链接",
    editType: "inline",
    defaultProps: {
      text: '链接',
      url: '/'
    }
  },
  UIButton: {
    name: "Button",
    zh: "按钮",
    editType: "inline",
    defaultProps: {
      text: '按钮',
      onClick: () => alert('点击按钮')
    }
  },
  UIBlock: {
    name: "Block",
    zh: "区块",
    editType: "block",
  },
  UIDivider: {
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
