module.exports = {
  title: "组件文档",
  description: '组件', 
  base: '/',
  repo: 'vuejs/vitepress',
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  },
  // 主题配置
  themeConfig: {
    //  侧边导航
    sidebar: [
      { text: '远程搜索组件', link: '../components/w-search-select/README'},
    ]
  },
}