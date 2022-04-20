import { App } from 'vue';

// https://github.com/youzan/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};
// deps: 依赖组件
// alias: 组件注册别名
export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

interface IOptions<E> {
  deps?: E[];
  alias?: string;
}
export function withInstall<T, E> (component: T, options: IOptions<E> = {}) {
  const { alias, deps } = options;
  const useComponent = (comp: T | E, app: App) => {
    const { name } = comp as unknown as { name: string };
    app.component(alias || name, comp);
  };
  (component as Record<string, unknown>).install = (app: App) => {
    useComponent(component, app);
    if (deps?.length) {
      deps.forEach(dep => useComponent(dep, app));
    }
  };

  return component as WithInstall<T>;
}
