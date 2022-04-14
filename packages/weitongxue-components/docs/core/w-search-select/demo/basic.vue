<script setup lang="ts">
import { ref } from 'vue';
import WSearchInput from '../package/index.vue';
import { res } from '../mock';
import { IOptionItem } from '../package/type';

const value = ref('');
const selectList = ref<IOptionItem[]>([]);

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
<template>
  <WSearchInput
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
