import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { loginResponse, loginApi } from '@/api/user'
export const useUserStore = defineStore('user', () => {
  let userInfo = reactive<loginResponse>({
    username: '',
    userToken: '',
    age: 0,
    roles: []
  })

  const fetchLogin = (data) => {
    return loginApi(data).then((res) => {
      userInfo = res
    })
  }

  return {
    userInfo,
    fetchLogin
  }
})
