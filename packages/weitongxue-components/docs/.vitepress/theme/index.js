import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import { installComponent } from '../../../core/w-search-select/package/index.ts'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
    installComponent(app)
  }
}