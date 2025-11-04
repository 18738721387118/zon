const requireEnv = (key: string) => {
  const val = process.env[key]

  if (!val) {
    throw new Error(`Missing required env var: ${key}`)
  }

  return val
}

export const Env = {
  NODE_ENV: requireEnv('NODE_ENV'),
  API_URL: requireEnv('NEXT_PUBLIC_API_URL'),
  APP_URL: requireEnv('NEXT_PUBLIC_APP_URL'),
  APP_DOMAIN: requireEnv('NEXT_PUBLIC_APP_DOMAIN'),
} as const

export type Env = typeof Env

// export const NODE_ENV = requireEnv('NODE_ENV')

// export const API_URL = requireEnv('NEXT_PUBLIC_API_URL')

// export const APP_URL = requireEnv('NEXT_PUBLIC_APP_URL')

// export const APP_DOMAIN = requireEnv('NEXT_PUBLIC_APP_DOMAIN')
