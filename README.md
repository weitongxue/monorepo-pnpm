### 基于pnpm-workspaces实现一个monorepo仓库，用于管理多个库的统一维护以及发布。

- 计划有hooks库，utils库，components库，目前先搭建基本的模型

- 可以用 ```pnpm publish```统一发布，也可以借助```release-it```做单独发布 


      后续会有对应库的文档搭建和jest输出。


- eslint检验规则
      
      为了规范所有项目使用同一套校验规则，.eslintrc配置文件，我们可以建在根目录下，然后子项目中的.eslintrc配置中，使用extends继承根目录配置。

### ```weitongxue-use```
      一个基于vue3.x的hooks库，总结一些工作中常用的hooks，也会借鉴一些VueUse现有hooks的实现。


