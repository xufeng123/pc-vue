import { MessageBox } from 'element-ui'

const confirm = function(ctx, title, obj) {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(ctx, title, {
      closeOnClickModal: false,
      confirmButtonText: obj.conBtn || '确定',
      cancelButtonText: obj.canBtn || '取消',
      type: obj.type || 'warning'
    }).then(() => {
      resolve()
    }).catch(() => {
      reject()
    })
  })
}

export default confirm
