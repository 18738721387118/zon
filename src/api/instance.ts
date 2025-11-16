import axios from 'axios'

import { ClientRoutes } from '@/constants/client-routes'
import { ServerRoutes } from '@/constants/server-routes'

import { Env } from '@/config/env'
import { getAccessToken, removeAccessToken, saveAccessToken } from '@/utils/cookies'

export const instance = axios.create({
  baseURL: Env.API_URL,
})

instance.interceptors.request.use(
  config => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  res => res,
  async err => {
    const req = err.config

    if (err.response?.status === 401 && !req._retry) {
      if (req.url === ServerRoutes.LOGIN) {
        return Promise.reject(err)
      }

      if (req.url === ServerRoutes.REFRESH) {
        removeAccessToken()
        window.location.replace(ClientRoutes.LOGIN)

        return Promise.reject(err)
      }

      req._retry = true
      try {
        const response = await instance.post(ServerRoutes.REFRESH)
        const newToken = response.data.accessToken

        if (newToken) {
          saveAccessToken(newToken)
          req.headers.Authorization = `Bearer ${newToken}`

          return instance(req)
        }
      } catch (refreshError) {
        removeAccessToken()
        window.location.replace(ClientRoutes.LOGIN)

        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(err)
  },
)
