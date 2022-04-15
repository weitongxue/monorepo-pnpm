export interface IOptionItem {
  label: string;
  value: string;
  key?: string;
  disabled?: boolean;
  currentItem?: IOptionItem;
}

export interface IConfigItem {
  dataKey: string; // 接口数据key
  labelKey: string;
  valueKey: string;
  keywordQueryKey?: string; // 接口请求的字段
  valueQueryKey?: string; // 用value去请求数据（回显的时候）
  pageSize?: number;
}
