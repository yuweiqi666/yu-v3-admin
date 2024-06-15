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
  },
  {
    url: '/api/user/info',
    method: 'post',
    response: (res) => {
      const { token } = res.headers
      if (token === 'vben') {
        return {
          code: 0,
          message: '获取用户信息成功',
          data: {
            userId: 1,
            avatar: '111',
            username: '张三',
            password: '111111',
            desc: '张三的描述',
            roles: [],
            buttons: [],
            routes: [],
            token: 'vben'
          }
        }
      } else {
        return {
          code: 200,
          message: '获取用户失败！',
          data: null
        }
      }
    }
  }
]
