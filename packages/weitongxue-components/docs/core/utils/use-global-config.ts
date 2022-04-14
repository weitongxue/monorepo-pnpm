import { getCurrentInstance, inject } from 'vue';
import { configProviderKey } from '../plugins';
import { TGConfigProviderPluginOption } from '../plugins/type';

export function useGlobalConfig<K extends keyof TGConfigProviderPluginOption>(
  key: K
): TGConfigProviderPluginOption[K];
export function useGlobalConfig(): TGConfigProviderPluginOption;
export function useGlobalConfig(key?: keyof TGConfigProviderPluginOption) {
  const inSetup = !!getCurrentInstance();
  if (inSetup) {
    const config = inject(configProviderKey, undefined);
    if (key && config) {
      return config[key];
    }
    return config;
  }
  return {};
}
