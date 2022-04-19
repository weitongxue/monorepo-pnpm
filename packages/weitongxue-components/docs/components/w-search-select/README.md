# w-search-input 远程搜索下拉选择组件
:::demo

```vue
<script setup lang="ts">
  import { ref } from 'vue';
  interface IOptionItem {
    label: string;
    value: string;
    key?: string;
    disabled?: boolean;
    currentItem?: IOptionItem;
  }
  const res = {
    data: [
      {
        value: '1',
        label: '测试1'
      },
      {
        value: '2',
        label: '测试2'
      },
      {
        value: '3',
        label: '测试3'
      }
    ]
  };
  const value = ref('');
  const selectList = ref([]);

  const handleQuery = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });

  const handleChange = (val: string, list: IOptionItem[]) => {
    selectList.value = list;
  };
</script>

基本用法：

<template>
  <w-search-input
    v-model="value"
    :method="handleQuery"
    @change="handleChange"
  />
  <div class="margin-top-10" v-show="value">选中的值：{{ value }}</div>
  <div class="margin-top-10" v-show="selectList.length">
    选中的item：{{ selectList }}
  </div>
</template>

<style lang="scss" scope>
.margin-top-10 {
  margin-top: 10px;
}
</style>


```
:::

:::demo

```vue
<script setup lang="ts">
  import { ref } from 'vue';
  interface IOptionItem {
    label: string;
    value: string;
    key?: string;
    disabled?: boolean;
    currentItem?: IOptionItem;
  }
  const result = {
    data: {
      list: [
        {
          userCode: '123',
          userName: '张三'
        },
        {
          userCode: '456',
          userName: '李四'
        },
        {
          userCode: '789',
          userName: '王五'
        }
      ]
    }
  };
  const value = ref('');
  const selectList = ref([]);

  const handleQuery = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });

  const handleChange = (val: string, list: IOptionItem[]) => {
    selectList.value = list;
  };
</script>

配置用法：

<template>
  <w-search-input
    v-model="value"
    :method="handleQuery"
    @change="handleChange"
    :config="{
      dataKey: 'data.list',
      labelKey: 'userName',
      valueKey: 'userCode',
    }"
  />
  <div class="margin-top-10" v-show="value">选中的值：{{ value }}</div>
  <div class="margin-top-10" v-show="selectList.length">
    选中的item：{{ selectList }}
  </div>
</template>

<style lang="scss" scope>
.margin-top-10 {
  margin-top: 10px;
}
</style>


```

:::


:::demo

```vue
<script setup lang="ts">
  import { ref } from 'vue';
  interface IOptionItem {
    label: string;
    value: string;
    key?: string;
    disabled?: boolean;
    currentItem?: IOptionItem;
  }
  const result = {
    data: {
      list: [
        {
          userCode: '123',
          userName: '张三'
        },
        {
          userCode: '456',
          userName: '李四'
        },
        {
          userCode: '789',
          userName: '王五'
        }
      ]
    }
  };
  const value = ref([]);
  const selectList = ref([]);

  const handleQuery = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });

  const handleChange = (val: string, list: IOptionItem[]) => {
    selectList.value = list;
  };
</script>

多选用法：

<template>
  <w-search-input
    v-model="value"
    :method="handleQuery"
    @change="handleChange"
    multiple
    :config="{
      dataKey: 'data.list',
      labelKey: 'userName',
      valueKey: 'userCode',
    }"
  />
  <div class="margin-top-10" v-show="value.length">选中的值：{{ value }}</div>
  <div class="margin-top-10" v-show="selectList.length">
    选中的item：{{ selectList }}
  </div>
</template>

<style lang="scss" scope>
.margin-top-10 {
  margin-top: 10px;
}
</style>


```

:::

:::demo

```vue
<script setup lang="ts">
import { ref } from 'vue';
interface IOptionItem {
  label: string;
  value: string;
  key?: string;
  disabled?: boolean;
  currentItem?: IOptionItem;
}
const value = ref('');
const selectList = ref<IOptionItem[]>([]);


// 枚举数据
const resultEnum = {
  data: {
    list: [
      {
        userCode: '123',
        userName: '张三',
        state: 'ENABLE'
      },
      {
        userCode: '456',
        userName: '李四',
        state: 'DISABLE'
      },
      {
        userCode: '789',
        userName: '王五',
        state: 'ENABLE'
      },
      {
        userCode: '456',
        userName: '赵六',
        state: 'DISABLE'
      }
    ]
  }
};

enum STATE_ENUM {
  /** 启用 */
  ENABLE = 'ENABLE',
  /** 禁用 */
  DISABLE = 'DISABLE',
}
const STATE_LIST = [
  { value: STATE_ENUM.ENABLE, label: '启用' },
  { value: STATE_ENUM.DISABLE, label: '禁用' }
];

const getLabelByVal = (arr: IOptionItem[], val: string) => {
  const item =
    (arr.find(it => String(it.value) === String(val)) as IOptionItem);
  return item.label || '';
};
const handleQuery = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultEnum);
    }, 1000);
  });
const handleChange = (val: string, list: IOptionItem[]) => {
  selectList.value = list;
};
const handleFormat = (res: any, dataKey: string) => {
  const list = res.data.list;
  return list?.map((item: any) => ({
    label: `${item.userName}（${getLabelByVal(STATE_LIST, item.state)}）`,
    value: item.userCode,
    currentItem: item
  }));
};
</script>

自定义用法：

<template>
  <w-search-input
    v-model="value"
    :method="handleQuery"
    @change="handleChange"
    :format-fn="handleFormat"
    :config="{
      dataKey: 'data.list',
      labelKey: 'userName',
      valueKey: 'userCode',
    }"
  >
  </w-search-input>
  <div class="margin-top-10" v-show="value">选中的值：{{ value }}</div>
  <div class="margin-top-10" v-show="selectList.length">
    选中的item：{{ selectList }}
  </div>
</template>

<style lang="scss" scope>
.margin-top-10 {
  margin-top: 10px;
}
</style>


```

:::


:::demo

```vue
<script setup lang="ts">
import { ref } from 'vue';
interface IOptionItem {
  label: string;
  value: string;
  key?: string;
  disabled?: boolean;
  currentItem?: IOptionItem;
}
const value = ref('');
const selectList = ref<IOptionItem[]>([]);


// 枚举数据
const resultEnum = {
  data: {
    list: [
      {
        userCode: '123',
        userName: '张三',
        state: 'ENABLE'
      },
      {
        userCode: '456',
        userName: '李四',
        state: 'DISABLE'
      },
      {
        userCode: '789',
        userName: '王五',
        state: 'ENABLE'
      },
      {
        userCode: '456',
        userName: '赵六',
        state: 'DISABLE'
      }
    ]
  }
};

enum STATE_ENUM {
  /** 启用 */
  ENABLE = 'ENABLE',
  /** 禁用 */
  DISABLE = 'DISABLE',
}
const STATE_LIST = [
  { value: STATE_ENUM.ENABLE, label: '启用' },
  { value: STATE_ENUM.DISABLE, label: '禁用' }
];

const getLabelByVal = (arr: IOptionItem[], val: string) => {
  const item =
    (arr.find(it => String(it.value) === String(val)) as IOptionItem);
  return item.label || '';
};
const handleQuery = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultEnum);
    }, 1000);
  });
const handleChange = (val: string, list: IOptionItem[]) => {
  selectList.value = list;
};
</script>

slot用法：

<template>
  <w-search-input
    v-model="value"
    :method="handleQuery"
    @change="handleChange"
    :config="{
      dataKey: 'data.list',
      labelKey: 'userName',
      valueKey: 'userCode',
    }"
  >
    <template #default="{ item }">
      <span
        >{{ item.label }}（{{ getLabelByVal(STATE_LIST, item.state) }}）</span
      >
    </template>
  </w-search-input>
  <div class="margin-top-10" v-show="value">选中的值：{{ value }}</div>
  <div class="margin-top-10" v-show="selectList.length">
    选中的item：{{ selectList }}
  </div>
</template>

<style lang="scss" scope>
.margin-top-10 {
  margin-top: 10px;
}
</style>


```

:::

### 属性
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 绑定值 | string/ string[] | — | - |
| method | 数据请求方法 | Function | — | - |
| multiple | 是否多选 | boolean | — | false |
| needInitSearch | 是否初始化的时候查询数据 | boolean | — | false |
| needInitOptions | 查询值变化是否置空选项 | boolean | — | false |
| params | 额外请求参数 | object | — | - |
| config | 配置项 | 见下表 | — | - |
| formatFn | 自定义方法处理option | function | — | - |

### config
 ```
 { dataKey: string; labelKey: string; valueKey: string; keywordQueryKey?: string; valueQueryKey?: string; pageSize?: number;}
 ```

### Slots


| 插槽名        | 插槽内容        |
| ------------- |:-------------:|
| default       | 自定义内容      |
