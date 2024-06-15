import { reactive, ref } from 'vue'
import useUserStore from '@/store/user/index'
import { getCurrentTime } from '@/utils/time'
const userStore = useUserStore()
const loading = ref(false)
export const useUserLogin = () => {
  const userForm = reactive({
    username: '',
    password: '',
    valiText: ''
  })
  const loginHandler = async () => {
    loading.value = true
    try {
      await userStore.getLoginHandler({
        username: userForm.username,
        password: userForm.password
      })
      await userStore.getUserInfoHandler()
      const nowTime = getCurrentTime()
      const username = userStore.userInfo?.username
      ElNotification({
        message: '欢迎回来',
        title: `Hi，${username + nowTime}好`,
        type: 'success'
      })
      loading.value = false
    } catch (error) {
      loading.value = false
      return Promise.reject('')
    }
  }
  return {
    loading,
    userForm,
    loginHandler
  }
}
