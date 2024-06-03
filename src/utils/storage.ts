export const getItem = (key: string): object | string => {
  const result = sessionStorage.getItem(key)
  try {
    return JSON.parse(result as string)
  } catch (error) {
    return result as string
  }
}

export const setItem = (key: string, value: object | string): void => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

export const getItemLocal = (key: string): object | string | null => {
  const result = localStorage.getItem(key)
  try {
    return JSON.parse(result as string)
  } catch (error) {
    return result
  }
}

export const setItemLocal = (key: string, value: object | string): void => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const removeItemLocal = (key: string) => {
  localStorage.removeItem(key)
}
