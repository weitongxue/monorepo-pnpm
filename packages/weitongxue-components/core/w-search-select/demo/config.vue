<script setup lang="ts">
import { ref } from 'vue';
import WSearchInput from '../package/index.vue';
import { result } from '../mock';
import { IOptionItem } from '../package/type';

const value = ref('');
const selectList = ref<IOptionItem[]>([]);

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
<template>
  <WSearchInput
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
