<template>
  <el-select
    :modelValue="modelValue"
    :multiple="multiple"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    @change="handleChange"
    :loading="loading"
    v-bind="$attrs"
    clearable
  >
    <el-option
      v-for="item in optionList"
      :key="item.value"
      :value="item.value"
      :label="item.label"
      :disabled="item.disabled"
    >
      <template #default>
        <slot :item="item"></slot>
      </template>
    </el-option>
  </el-select>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
  onBeforeUnmount,
  watch,
  onMounted
} from 'vue';
import { IConfigItem, IOptionItem } from './type';
import { get, isEqual, debounce } from 'lodash-es';
import { ElSelect, ElOption } from 'element-plus';
import 'element-plus/es/components/select/style/index';
import 'element-plus/es/components/select/style/css';

export default defineComponent({
  name: 'WSearchInput',
  components: {
    ElSelect,
    ElOption
  },
  props: {
    modelValue: {
      type: [String, Array],
      default: '',
      required: true
    },
    // 请求方法
    method: {
      type: Function,
      default: () => {}
    },
    /**
     * 是否在初始化的时候查询数据
     */
    needInitSearch: {
      type: Boolean,
      default: false
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 额外参数
    params: {
      type: Object,
      default: () => {}
    },
    /**
     *   配置项：
     *   dataKey: 接口数据放回获取数据的key, 一般接口都是 res.data / res.data.list
     *   labelKey: select-option label对应接口数据的字段
     *   valueKey: select-option value对应接口数据都字段
     *   keywordQueryKey: 查询的key
     *   valueQueryKey: 用value作为查询的key
     *   pageSize
     */
    config: {
      type: Object as PropType<IConfigItem>,
      default: () => {}
    },
    /**
     * 自定义格式化选项显示
     */
    formatFn: {
      type: Function,
      default: null
    },
    /**
     * 查询值变化则置空选项
     */
    needInitOptions: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit }) {
    const optionList = ref<IOptionItem[]>([]);
    const defaultConfig = {
      dataKey: 'data',
      labelKey: 'label',
      valueKey: 'value',
      keywordQueryKey: 'keyword',
      valueQueryKey: 'keyword',
      pageSize: 20
    };

    const config: IConfigItem = Object.assign({}, defaultConfig, props.config);

    // 请求参数
    const queryParams = ref({
      [config.keywordQueryKey!]: '',
      pageSize: config.pageSize
    });

    const loading = ref(false);
    const timer = ref<any | null>(null);

    // 获取数据
    const handleGetData = debounce(
      async (
        keyword: string | unknown[],
        type: 'keywordQuery' | 'valueQuery' = 'keywordQuery'
      ) => {
        loading.value = true;
        const { keywordQueryKey, valueQueryKey, dataKey } = config;
        const params = Object.assign({}, queryParams.value, props.params);
        try {
          if (type === 'keywordQuery') {
            params[keywordQueryKey!] = keyword;
          } else {
            params[valueQueryKey!] = keyword;
          }
          const res = await props.method(params);
          loading.value = false;
          if (props.formatFn) {
            // 自定义输出模版
            optionList.value = props.formatFn(res, dataKey);
          } else {
            const list = get(res, config.dataKey) ?? [];
            optionList.value = list.map((item: any) => ({
              // eslint-disable-next-line no-restricted-syntax
              ...item,
              label: item[config.labelKey],
              value: item[config.valueKey],
              currentItem: item
            }));
          }
        } catch (e) {
          console.log('搜索异常', e);
        } finally {
          loading.value = false;
        }
      },
      500
    );
    // 远程请求数据
    const remoteMethod = async (query: string) => {
      if (!query && !props.needInitSearch) return;
      const inputValue = query.trim();
      handleGetData(inputValue);
    };

    const handleChange = (val: string | []) => {
      const _val = typeof val === 'string' ? [val] : val;
      const currentSelectList: any = [];
      optionList.value.forEach((item) => {
        _val.forEach((info) => {
          if (item.value === info) {
            currentSelectList.push(item.currentItem);
          }
        });
      });
      emit('update:modelValue', val);
      emit('change', val, currentSelectList);
    };

    watch(
      () => [props.modelValue, props.params],
      (n, o) => {
        if (props.needInitOptions && !isEqual(n, o)) {
          optionList.value = [];
        }
        if (
          props.modelValue &&
          !optionList.value.find(v => v.value === props.modelValue)
        ) {
          handleGetData(props.modelValue, 'valueQuery');
        }
      },
      {
        immediate: true
      }
    );

    onMounted(() => {
      if (props.needInitSearch) {
        handleGetData('');
      }
    });

    onBeforeUnmount(() => {
      clearTimeout(timer.value);
    });

    return {
      optionList,
      loading,
      remoteMethod,
      handleChange
    };
  }
});
</script>
