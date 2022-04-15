<script setup lang="ts">
import { ref } from 'vue';
import WSearchInput from '../package/index.vue';
import { resultEnum, STATE_LIST } from '../mock';
import { IOptionItem } from '../package/type';
import { get } from 'lodash-es';

const value = ref('');
const selectList = ref<IOptionItem[]>([]);

const getLabelByVal = (arr: IOptionItem[], val: string) => {
  const item =
    (arr.find((it) => String(it.value) === String(val)) as IOptionItem);
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
  const list = get(res, dataKey);
  return list?.map((item: any) => ({
    label: `${item.userName}（${getLabelByVal(STATE_LIST, item.state)}）`,
    value: item.userCode,
    currentItem: item,
  }));
};
</script>
<template>
  <WSearchInput
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
  </WSearchInput>
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
