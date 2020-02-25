/**
 * 手机号
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function checkMobile(rule, value, callback) {
  if (value) {
    const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
    if (value.match(myreg) == null) {
      return callback(new Error('请输入正确手机号'))
    } else {
      callback()
    }
  } else {
    callback(new Error('请输入正确手机号'))
  }
}
/**
 * 邮箱
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function checkEmail(rule, value, callback) {
  if (value) {
    const myreg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (value.match(myreg) == null) {
      return callback(new Error('请输入正确邮箱'))
    } else {
      callback()
    }
  } else {
    callback()
  }
}
/**
 * 证件号（只允许输入字母数字）
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function checkCard(rule, value, callback) {
  let msg, myreg
  if (value) {
    myreg = /^[a-zA-Z0-9]+$/
    msg = '请输入正确的证件号'
    if (value.match(myreg) == null) {
      return callback(new Error(msg))
    } else {
      callback()
    }
  } else {
    callback()
  }
}
/**
 * 身份证校验
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export function checkIdCard(rule, value, callback) {
  let msg, myreg
  if (value) {
    myreg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    msg = '请输入正确的身份证号'
    if (value.match(myreg) == null) {
      return callback(new Error(msg))
    } else {
      callback()
    }
  } else {
    callback()
  }
}
