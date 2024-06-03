export const getCurrentTime = (): string => {
  let message = ''
  const now = new Date().getHours()
  if (now <= 12) {
    message = '上午'
  } else if (now <= 17) {
    message = '下午'
  } else if (now <= 23) {
    message = '晚上'
  }
  return message
}
