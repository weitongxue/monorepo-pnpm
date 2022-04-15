import { App } from 'vue';
import Basic from '../demo/basic.vue';
import Config from '../demo/config.vue';
// import WSearchInput from './index.vue';

export const installComponent = (app: App) => {
  app.component('Basic', Basic);
  app.component('Config', Config);
}

