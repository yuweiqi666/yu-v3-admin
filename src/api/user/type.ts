export enum Api {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}

export interface LoginRequestInter {
  username: string
  password: string
}

export interface LoginResponseInter {
  token: string
}

export interface GetUserInfoResponseInter {
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
