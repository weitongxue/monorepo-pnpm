// 基本数据
export const res = {
  data: [
    {
      value: '1',
      label: '测试1',
    },
    {
      value: '2',
      label: '测试2',
    },
    {
      value: '3',
      label: '测试3',
    },
  ],
};

// 常规数据
export const result = {
  data: {
    list: [
      {
        userCode: '123',
        userName: '张三',
      },
      {
        userCode: '456',
        userName: '李四',
      },
      {
        userCode: '789',
        userName: '王五',
      },
    ],
  },
};

// 枚举数据
export const resultEnum = {
  data: {
    list: [
      {
        userCode: '123',
        userName: '张三',
        state: 'ENABLE',
      },
      {
        userCode: '456',
        userName: '李四',
        state: 'DISABLE',
      },
      {
        userCode: '789',
        userName: '王五',
        state: 'ENABLE',
      },
      {
        userCode: '456',
        userName: '赵六',
        state: 'DISABLE',
      },
    ],
  },
};

export enum STATE_ENUM {
  /** 启用 */
  ENABLE = 'ENABLE',
  /** 禁用 */
  DISABLE = 'DISABLE',
}
export const STATE_LIST = [
  { value: STATE_ENUM.ENABLE, label: '启用' },
  { value: STATE_ENUM.DISABLE, label: '禁用' },
];
