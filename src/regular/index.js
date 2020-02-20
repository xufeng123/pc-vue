/**
 * 常用的正则
 */
const regular = {
  email: {
    reg: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    name: 'email邮箱'
  },
  mobile: {
    reg: /^0?1[3|4|5|7|8]\d{9}$/,
    name: '手机号码'
  },
  idCard: {
    reg: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
    name: '身份证号'
  },
  numText: /[^a-zA-Z0-9]/g, // 只允许输入数字和字母
  text: /[^a-zA-Z0-9\u4e00-\u9fa5]/g, // 不允许输入特殊符号
  number: /[^\d]/g, // 只能输入数字
  noNum: /[^a-zA-Z\u4e00-\u9fa5]/g // 只允许输入中文和英文
}

export default regular;
