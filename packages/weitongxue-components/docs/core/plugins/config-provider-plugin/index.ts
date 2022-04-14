import { App, InjectionKey, ref } from 'vue';
import { TGConfigProviderPluginOption } from './type';
import { configProviderContextKey } from 'element-plus';

export const configProviderKey: InjectionKey<TGConfigProviderPluginOption> =
  Symbol('configProviderKey');

export const configProviderPlugin = {
  install(app: App, options: TGConfigProviderPluginOption) {
    app.provide(configProviderKey, options);
    // 这里可以写element-plus配置
    if (options.global) {
      app.provide(configProviderContextKey, ref(options.global));
    }
  },
};
