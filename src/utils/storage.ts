// 设置item
export const setItem = (value: string | object, key: string) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(value, key)
}
// 获取
export const getItem = (key: string) => {
  let data = window.localStorage.getItem(key)
  if (typeof data === 'object') {
    data = JSON.parse(data)
  }
  return data
}
// 删除
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

export const removeAllItem = () => {
  window.localStorage.clear()
}
