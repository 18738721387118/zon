export const ClientRoutes = {
  HOME: '/',

  PROFILE: '/profile',

  // Auth
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
} as const

export type ClientRoute = (typeof ClientRoutes)[keyof typeof ClientRoutes]
