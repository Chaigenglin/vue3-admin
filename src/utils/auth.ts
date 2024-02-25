import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
// 获取当前时间戳
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}
//设置时间戳
export const setTimeStamp = () => {
  return setItem(TIME_STAMP, Date.now().toString())
}
//是否超时
export const isCheckTimeOut = () => {
  const currentTime = Date.now()
  //   缓存时间
  const timeStamp = Number(getTimeStamp()) || 0
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
