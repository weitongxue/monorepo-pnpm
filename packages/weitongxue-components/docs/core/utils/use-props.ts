import { camelize, computed, getCurrentInstance } from 'vue';
import { TGConfigProviderPluginOption } from '../plugins/type';
import { useGlobalConfig } from './use-global-config';

// 把属性key转换为驼峰类型，例如native-type转为nativeType
function objectKeyToCamelize(obj: any) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const cameKey = camelize(key);
      obj[cameKey] = obj[key];
      //  如果被转换，删除原来的key
      if (cameKey !== key) {
        delete obj[key];
      }
    }
  }
  return obj;
}

/**
 * 合并组件参数，用户定义props > 全局配置 > 默认参数
 * @param props 组件props
 * @param key 全局配置key值
 * @returns 合并后的props
 */
export function useMergeProps<T>(
  props: T,
  key: keyof TGConfigProviderPluginOption
) {
  const globalOptions = objectKeyToCamelize(useGlobalConfig(key));
  const instance = getCurrentInstance();
  return computed<T>(() => {
    const customProps = objectKeyToCamelize(instance!.vnode.props);
    const mergeProps = Object.assign({}, props, globalOptions, customProps);
    return mergeProps;
  });
}
