import { Loading } from 'element-ui'

export function openLoading() {
  Loading.service({
    fullscreen: true,
    text: '拼命加载中',
    spinner: 'el-icon-loading'
  })
}
export function closeLoading() {
  Loading.service().close()
}
