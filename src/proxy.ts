import { type NextRequest, NextResponse } from 'next/server'

import { ClientRoutes } from './constants/client-routes'
import { CookieKeys } from './constants/cookie-keys'

export async function proxy(request: NextRequest) {
  const { cookies, url } = request

  const accessToken = cookies.get(CookieKeys.ACCESS_TOKEN)?.value

  if (url.includes(ClientRoutes.REGISTER) || url.includes(ClientRoutes.LOGIN)) {
    if (accessToken) {
      return NextResponse.redirect(new URL(ClientRoutes.HOME, url))
    }

    return NextResponse.next()
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL(ClientRoutes.LOGIN, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/account/:path*'],
}
