export const ClientRoutes = {
  HOME: '/',
  // Auth
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
} as const

export type ClientRoute = (typeof ClientRoutes)[keyof typeof ClientRoutes]

export const ServerRoutes = {
  // Auth
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
} as const

export type ServerRoute = (typeof ServerRoutes)[keyof typeof ServerRoutes]
