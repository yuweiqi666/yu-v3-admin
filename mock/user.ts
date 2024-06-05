export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      if (body.username === 'admin' && body.password === '111111') {
        return {
          code: 0,
          message: '登陆成功',
          data: {
            token: 'vben'
          }
        }
      } else {
        return {
          code: 200,
          message: '用户名或密码错误！',
          data: null
        }
      }
    }
  }
]
