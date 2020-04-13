/**
 * input输入框限定输入
 * num: 只允许输入数字
 * point: 允许输入两位小数
 * NAN: 非数字
 * spl: 不允许输入特殊符号
 * noZh: 不允许输入特殊符号和中文
 * minus: 允许输入正负数
 * minusPoint: 允许输入两位小数的正负数
 * blank: 不允许输入空格
 */
const RegInput = {
  inserted(el, binding) {
    var input
    if (el.getElementsByTagName('input')[0]) {
      input = el.getElementsByTagName('input')[0]
    } else if (el.getElementsByTagName('textarea')[0]) {
      input = el.getElementsByTagName('textarea')[0]
    } else {
      input = el
    }
    var reg = null
    if (binding.arg === 'num') {
      reg = /^\d*/g
    } else if (binding.arg === 'point') {
      reg = /^\d*(\.?\d{0,2})/g
      // reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}/g
    } else if (binding.arg === 'NAN') {
      reg = /^[a-zA-Z_\u4e00-\u9fa5]*/g
    } else if (binding.arg === 'spl') {
      reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]*/g
    } else if (binding.arg === 'noZh') {
      reg = /^[a-zA-Z0-9]*/g
    } else if (binding.arg === 'minus') {
      reg = /^(-?)\d*/g
    } else if (binding.arg === 'minusPoint') {
      reg = /^(-?)\d*(\.?\d{0,2})/g
    } else if (binding.arg === 'blank') {
      reg = /\s+/g
    }
    el.addEventListener('input', function() {
      if (binding.arg === 'blank') {
        input.value = input.value.replace(reg, '')
      } else {
        input.value = input.value.match(reg, '')
      }
    })
  }
}

export default RegInput
