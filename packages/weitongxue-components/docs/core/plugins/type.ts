import { TGConfigProviderPluginOption } from './config-provider-plugin/type';

type TGPluginOption = {
  /*
   * 全局配置插件 参数
   * */
  configProviderPluginOption?: TGConfigProviderPluginOption;
};

export { TGPluginOption, TGConfigProviderPluginOption };
