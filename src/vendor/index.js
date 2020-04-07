import { openLoading, closeLoading } from './v-loading'
import Print from './v-print'

const install = function(Vue) {
  if (install.installed) return
  Vue.$openLoading = Vue.prototype.$openLoading = openLoading
  Vue.$closeLoading = Vue.prototype.$closeLoading = closeLoading
  Vue.$print = Vue.prototype.$print = Print
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install as default,
  openLoading,
  closeLoading,
  Print
}
