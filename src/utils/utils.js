/* 函数节流 */
export function throttle(fn, interval) {
  var enterTime = 0 // 触发的时间
  var gapTime = interval || 300 // 间隔时间，如果interval不传，则默认300ms
  return function() {
    var context = this
    var backTime = new Date() // 第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments)
      enterTime = backTime // 赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  }
}
/* 函数防抖 */
export function debounce(fn, interval) {
  var timer
  var gapTime = interval || 1000 // 间隔时间，如果interval不传，则默认1000ms
  return function() {
    clearTimeout(timer)
    var context = this
    var args = arguments // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function() {
      fn.call(context, args)
    }, gapTime)
  }
}
// 自定义加减法运算
export function diffNum(num1, num2, type) {
  if (!num1) num1 = 0
  if (!num2) num2 = 0
  var sq1, sq2, m
  try {
    sq1 = num1.toString().split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = num2.toString().split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  m = Math.pow(10, Math.max(sq1, sq2))
  if (type === '-') return (accMul(num1, m) - accMul(num2, m)) / m
  if (type === '+') return (accMul(num1, m) + accMul(num2, m)) / m
}
// 两个浮点数相除
export function accDiv(num1, num2) {
  var t1, t2, r1, r2
  try {
    t1 = num1.toString().split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = num2.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(num1.toString().replace('.', ''))
  r2 = Number(num2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
// 两个浮点数相乘
export function accMul(num1, num2) {
  let m = 0
  let s1 = num1.toString()
  let s2 = num2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {
    console.error(e)
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
    console.error(e)
  }
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}
// 获得输入框中字符长度
export function getLength(val) {
  var str = val + ''
  var bytesCount = 0
  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      bytesCount += 1
    } else {
      bytesCount += 2
    }
  }
  return bytesCount
}
// 深复制
export function copy(val) {
  if (!val) return false
  return JSON.parse(JSON.stringify(val))
}
