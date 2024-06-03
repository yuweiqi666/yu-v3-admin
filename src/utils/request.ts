import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getMessageInfo } from './status'

interface BaseResponse<T = any> {
  code: number | string
  message: string
  data: T
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: import.meta.env.VITE_APP_API_TIMEOUT
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      return res.data
    }
    ElMessage({
      type: 'error',
      message: getMessageInfo(res.status)
    })
    return res.data
  },
  (err: any) => {
    const { response } = err
    if (response) {
      ElMessage({
        type: 'error',
        message: getMessageInfo(response.status)
      })
    } else {
      ElMessage({
        type: 'error',
        message: '网络连接错误，请稍后再试！'
      })
    }
    return Promise.reject(new Error(response?.data || '网络错误'))
  }
)

const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config
  return service.request<any, AxiosResponse<BaseResponse<T>>>(conf).then((res: AxiosResponse<BaseResponse<T>>) => {
    const data = res.data
    if (data.code != 0) {
      ElMessage({
        type: 'error',
        message: data.message
      })
      return Promise.reject(new Error(data.message))
    } else {
      return Promise.resolve(data.data as T)
    }
  })
}

export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, params?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'get', params })
}

export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'post', data })
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, params?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'put', params })
}

export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data?: U): Promise<T> {
  return requestInstance({ ...config, url, method: 'delete', data })
}
