interface IComponent {
  name: string;
  zh: string;
  editType: "block" | "inline" | "inner";
  defaultProps?: Record<string, any>;
  propsSchema?: {
    name: string;
    desc: string;
    type: string;
    candidates?: string[];
    defaultValue: any;
  }[];
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
      text: "一级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '一级标题'
      }
    ]
  },
  UIH2: {
    name: "H2",
    zh: "二级标题",
    editType: "block",
    defaultProps: {
      text: "二级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '二级标题'
      }
    ]
  },
  UIH3: {
    name: "H3",
    zh: "三级标题",
    editType: "block",
    defaultProps: {
      text: "三级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '三级标题'
      }
    ]
  },
  UIH4: {
    name: "H4",
    zh: "四级标题",
    editType: "block",
    defaultProps: {
      text: "四级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '四级标题'
      }
    ]
  },
  UIH5: {
    name: "H5",
    zh: "五级标题",
    editType: "block",
    defaultProps: {
      text: "五级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '五级标题'
      }
    ]
  },
  UIH6: {
    name: "H6",
    zh: "六级标题",
    editType: "block",
    defaultProps: {
      text: "六级标题",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '标题文本',
        type: 'string',
        defaultValue: '六级标题'
      }
    ]
  },
  UIText: {
    name: "Text",
    zh: "文本",
    editType: "inline",
    defaultProps: {
      text: "文本",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '文字文本',
        type: 'string',
        defaultValue: '文本'
      }
    ]
  },
  UILink: {
    name: "Link",
    zh: "链接",
    editType: "inline",
    defaultProps: {
      text: "链接",
      url: "/",
    },
    propsSchema: [
      {
        name: 'text',
        desc: '文字文本',
        type: 'string',
        defaultValue: '文本'
      },
      {
        name: 'url',
        desc: '链接',
        type: 'string',
        defaultValue: '/'
      }
    ]
  },
  UIButton: {
    name: "Button",
    zh: "按钮",
    editType: "inline",
    defaultProps: {
      text: "按钮",
      onClick: () => console.log("点击按钮"),
    },
    propsSchema: [
      {
        name: 'text',
        desc: '按钮文本',
        type: 'string',
        defaultValue: '按钮'
      },
    ]
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
  ElInput: {
    name: 'Input',
    zh: '输入框',
    editType: 'block',
    propsSchema: [
      {
        name: 'type',
        desc: '类型',
        type: 'single_select',
        candidates: ['text', 'textarea'],
        defaultValue: 'text'
      },
      {
        name: 'maxlength',
        desc: '最大输入长度',
        type: 'number',
        defaultValue: 100
      }
    ],
    defaultProps: {
      type: 'text',
      maxlength: 100
    }
  },
  ElCalendar: {
    name: "Calendar",
    zh: "日历",
    editType: "block",
  },
};

export default componentInfo;
