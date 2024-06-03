import { post } from '@/utils/request'
import { LoginRequestInter, LoginResponseInter, GetUserInfoResponseInter, Api } from './type'

export const loginApi = (data: LoginRequestInter) => {
  return post<LoginResponseInter, LoginRequestInter>({}, Api.LOGIN_URL, data)
}

export const getUserInfoApi = () => {
  return post<GetUserInfoResponseInter, LoginRequestInter>({}, Api.USERINFO_URL)
}
