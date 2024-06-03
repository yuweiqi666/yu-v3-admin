export enum Api {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}

export interface LoginRequestInter {
  username: string
  password: string
}

interface ResponseDataInter {
  token?: string
  message?: string
}

export interface LoginResponseInter {
  code: number
  data: ResponseDataInter
}

export interface CheckUserInter {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface UserInfoInter {
  checkUser?: CheckUserInter
  message?: string
}

export interface GetUserInfoResponseInter {
  code: number
  data: UserInfoInter
}
