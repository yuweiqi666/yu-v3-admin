import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginApi, getUserInfoApi } from '@/api/user/index'
import { LoginRequestInter, GetUserInfoResponseInter } from '@/api/user/type'
import { setItemLocal, getItemLocal, removeItemLocal } from '@/utils/storage'
const useUserStore = defineStore('User', () => {
  // 登陆逻辑
  const userToken = ref<string>((getItemLocal('userToken') as string) || '')
  const getLoginHandler = async (userData: LoginRequestInter) => {
    const result = await loginApi(userData)
    // 登陆成功
    userToken.value = result.token as string
    // 将token存入本地缓存
    setItemLocal('userToken', result.token as string)

    return 'login success'
  }

  // 退出登陆逻辑
  const getLogoutHandler = () => {
    userInfo.value = null
    userToken.value = ''
    removeItemLocal('userToken')
    removeItemLocal('userInfo')
  }

  // 获取用户信息逻辑
  const userInfo = ref<GetUserInfoResponseInter | null>((getItemLocal('userInfo') as GetUserInfoResponseInter) || null)
  const getUserInfoHandler = async () => {
    const checkUser = await getUserInfoApi()
    userInfo.value = checkUser as GetUserInfoResponseInter
    setItemLocal('userInfo', {
      userId: userInfo.value.userId,
      avatar: userInfo.value.avatar,
      username: userInfo.value.username,
      password: userInfo.value.password,
      desc: userInfo.value.desc,
      roles: userInfo.value.roles,
      buttons: userInfo.value.buttons,
      routes: userInfo.value.routes,
      token: userInfo.value.token
    })
    return 'getUserInfo success'
  }

  return {
    userInfo,
    userToken,
    getLoginHandler,
    getUserInfoHandler,
    getLogoutHandler
  }
})

export default useUserStore
