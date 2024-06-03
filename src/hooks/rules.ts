export const useUserRules = () => {
  const userRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 5, max: 10, message: '用户名长度为6～8位', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 12, message: '密码长度为10～12位', trigger: 'blur' }
    ],
    valiText: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
  }

  return {
    userRules
  }
}
