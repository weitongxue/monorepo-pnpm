# 插件 Plugins

### 介绍

集成组件库内所有的插件，包含 `config-provider-plugin`（全局参数配置插件）

### 插件全量注册

```javascript
import TiangongComponent from '@tiangong/components';
import zhCn from '@tiangong/components/lang/zh-cn';

app.use(TiangongComponent, {
  configProviderPluginOption: {
    locale: zhCn,
  },
});
```

### 单独个注册

全局参数配置插件

```javascript
import { configProviderPlugin } from '@tiangong/components';
import zhCn from '@tiangong/components/lang/zh-cn';

app.use(configProviderPlugin, {
  locale: zhCn,
});
```

### 贡献

| 开发者       | 添加代码行数 | 删除代码行数 | 提交总行数 | 提交次数 |
| ------------ | ------------ | ------------ | ---------- | -------- |
| renxianglin  | 1124         | 27           | 1151       | 5        |
| 郑国榕       | 739          | 5630         | 6369       | 11       |
| 许嘉冲       | 1380         | 49           | 1429       | 5        |
| eno          | 708          | 58           | 766        | 2        |
| cengyangyang | 1558         | 1921         | 3479       | 3        |
| 龚舜华       | 308          | 39           | 347        | 1        |
| xiejin       | 1152         | 0            | 1152       | 1        |
| caiyi        | 573          | 1            | 574        | 1        |
| luowei       | 452          | 1            | 453        | 2        |
| 翁晓慧       | 1666         | 5            | 1671       | 4        |
| “laixin”     | 1177         | 0            | 1177       | 1        |
| 陈文捷       | 702          | 0            | 702        | 1        |
| weiting      | 101          | 5            | 106        | 1        |
| guyongyong   | 528          | 6            | 534        | 3        |
| zhenjingxuan | 50           | 0            | 50         | 1        |
| 华狄         | 236          | 101          | 337        | 2        |
| stevenjlho   | 577          | 73           | 650        | 3        |
| zhangshuai   | 548          | 0            | 548        | 1        |
| zhongguian   | 266          | 0            | 266        | 1        |
| liuchun      | 358          | 0            | 358        | 1        |
| dengjiazhi   | 711          | 44           | 755        | 3        |
| chenwenchao  | 94           | 91           | 185        | 1        |
| nelson       | 321          | 0            | 321        | 1        |
| 黎树明       | 449          | 2            | 451        | 1        |
| suancaifish  | 473          | 30           | 503        | 2        |
| 黄建生       | 190          | 31           | 221        | 1        |
| weitongxue   | 32           | 0            | 32         | 1        |
