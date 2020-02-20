import { parseTime as parseTimeHandle } from '@/utils/index.js'
/**
 * 时间处理
 * @param {时间戳}} value
 * @param {*} formater
 */
export function parseTime(value, formater) {
  return parseTimeHandle(value, formater || '{y}-{m}-{d} {h}:{i}:{s}')
}
