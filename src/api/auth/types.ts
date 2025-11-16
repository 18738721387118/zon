import { User } from '@/types/user'

export type RegisterRequest = {
  email: string
  password: string
  name: string
  phone: string
}

export type RegisterResponse = {
  user: User
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  user: User
}

export type LogoutResponse = {
  message: string
}
