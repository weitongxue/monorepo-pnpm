import { App } from 'vue';
import { TGPluginOption } from './type';
import {
  configProviderPlugin,
  configProviderKey,
} from './config-provider-plugin';

const Plugins = {
  install(app: App, options: TGPluginOption = {}) {
    if (options.configProviderPluginOption) {
      configProviderPlugin.install(app, options.configProviderPluginOption);
    }
  },
};

export { Plugins, configProviderPlugin, configProviderKey };

export default Plugins;
