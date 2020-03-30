import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

/** 引用过滤器 */
import * as filters from './filters'
// 自定义指令
import * as directives from '@/directive'
// 图片懒加载
import VueLazyload from 'vue-lazyload'

import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
Vue.use(ElementUI)

// 注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 注册指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img.zcool.cn/community/01ae565972f1eaa8012193a3f58f8a.gif',
  loading: 'http://img.zcool.cn/community/01ae565972f1eaa8012193a3f58f8a.gif' // 懒加载使用的图片
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
