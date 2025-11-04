export const ClientRoutes = {
  HOME: '/',
  SIGN_UP: '/auth/sign-up',
  SIGN_IN: '/auth/sign-in',
} as const

export type ClientRoute = (typeof ClientRoutes)[keyof typeof ClientRoutes]

export const ServerRoutes = {
  API: '/api/v1',
} as const

export type ServerRoute = (typeof ServerRoutes)[keyof typeof ServerRoutes]
