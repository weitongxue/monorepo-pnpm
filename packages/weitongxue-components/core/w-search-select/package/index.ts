import { App } from 'vue';
import Basic from '../demo/basic.vue';
import Config from '../demo/config.vue';

export const installComponent = (app: App) => {
  app.component('Basic', Basic);
  app.component('Config', Config);
};
