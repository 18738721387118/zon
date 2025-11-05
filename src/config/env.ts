// const requireEnv = (key: string) => {
//   const val = process.env[key]

//   if (!val) {
//     throw new Error(`Missing required env var: ${key}`)
//   }

//   return val
// }

export const Env = {
  // NODE_ENV: requireEnv('NODE_ENV'),
  // API_URL: requireEnv('NEXT_PUBLIC_API_URL'),
  // APP_URL: requireEnv('NEXT_PUBLIC_APP_URL'),
  // APP_DOMAIN: requireEnv('NEXT_PUBLIC_APP_DOMAIN'),
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,
} as const

export type Env = typeof Env
