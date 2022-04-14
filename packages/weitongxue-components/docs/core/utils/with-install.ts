import { SFCWithInstall } from 'element-plus/es/utils/types';
import { App } from 'vue';

// https://github.com/youzan/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

interface IOptions<T> {
  deps?: T[];
  alias?: string;
}

// deps: 依赖组件
// alias: 组件注册别名
export function withInstall<T>(component: T, options: IOptions<T> = {}) {
  const { alias, deps } = options;
  const useComponent = (comp: T, app: App) => {
    const { name } = comp as unknown as { name: string };
    app.component(alias || name, comp);
  };
  (component as Record<string, unknown>).install = (app: App) => {
    useComponent(component, app);
    if (deps?.length) {
      deps.forEach((dep) => useComponent(dep, app));
    }
  };

  return component as WithInstall<T>;
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCWithInstall<T>;
};
