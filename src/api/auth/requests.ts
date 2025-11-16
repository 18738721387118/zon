import { ServerRoutes } from '@/constants/routes'

import { instance } from '../instance'

import {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RegisterRequest,
  RegisterResponse,
} from './types'
import { removeAccessToken, saveAccessToken } from '@/utils/cookies'

export const register = async (data: RegisterRequest) => {
  const response = (await instance.post<RegisterResponse>(ServerRoutes.REGISTER, data)).data

  return response
}

export const login = async (data: LoginRequest) => {
  const response = (await instance.post<LoginResponse>(ServerRoutes.LOGIN, data)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}

export const logout = async () => {
  const response = (await instance.post<LogoutResponse>(ServerRoutes.LOGOUT)).data

  if (response) {
    removeAccessToken()
  }

  return response
}

export const refresh = async () => {
  const response = (await instance.post<LoginResponse>(ServerRoutes.REFRESH)).data

  if (response.accessToken) {
    saveAccessToken(response.accessToken)
  }

  return response
}
