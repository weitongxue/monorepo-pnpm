# w-search-input 远程搜索下拉选择组件
:::demo 基础用法, 无需配置（数据接口就是{ value: string; label: string }[]） 

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

基本用法：<Basic />

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

:::demo 配置用法（接口数据返回：{ data: { total: 3, list: [{ userCode: string; userName: string; }] }}）

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

配置用法：<Config />

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


<!-- # w-search-input 远程搜索下拉选择组件

配置用法（接口数据返回：{ data: { total: 3, list: [{ userCode: string; userName: string; }] }}） <demo-playground> <config /> </demo-playground>

多选用法 <demo-playground> <multiple /> </demo-playground>

自定义输出 option 用法 <demo-playground> <custom /> </demo-playground>

自定义模版用法 <demo-playground> <CustomSlot></CustomSlot> </demo-playground>

搜索条件改变，清空上一次 option（清空就必须要保证 labelKey 和 valueKey 一致，因为 option 清空，会导致回显有问题） <demo-playground> <clear /> </demo-playground> -->

