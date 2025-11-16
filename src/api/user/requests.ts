import { ServerRoutes } from '@/constants/server-routes'

import { instance } from '../instance'

import { User } from './types'

export const getMe = async () => {
  const response = (await instance.get<User>(ServerRoutes.ME)).data

  return response
}
