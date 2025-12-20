export const ClientRoutes = {
  HOME: '/',

  ACCOUNT: '/account',
  CART: '/cart',
  CHECKOUT: '/checkout',
  SUCCESS: '/success',

  // Auth
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
} as const

export type ClientRoute = (typeof ClientRoutes)[keyof typeof ClientRoutes]
