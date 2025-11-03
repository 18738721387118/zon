import Cookies from 'js-cookie'

import { CookieKeys } from '@/constants/cookie-keys'

import { APP_DOMAIN } from '@/config/env'

export const getAccessToken = () => {
  return Cookies.get(CookieKeys.ACCESS_TOKEN)
}

export const removeAccessToken = () => {
  Cookies.remove(CookieKeys.ACCESS_TOKEN)
}

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(CookieKeys.ACCESS_TOKEN, accessToken, {
    domain: APP_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  })
}
