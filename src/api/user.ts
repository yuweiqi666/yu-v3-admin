import { post } from '@/utils/request'

interface loginRequest {
  username: string
  password: string
}

export interface loginResponse {
  username: string
  age: number
  roles: number[]
  userToken: string
}

interface reLoginRequest {
  userToken: string
}

export const loginApi = (data?: loginRequest) => {
  return post<loginResponse>({}, '/api/login', data)
}

export const refreshUserInfoApi = (data?: reLoginRequest) => {
  return post<loginResponse>({}, '/api/userInfo', data)
}
