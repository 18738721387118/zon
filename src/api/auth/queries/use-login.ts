import { useMutation, useQueryClient } from '@tanstack/react-query'

import { LoginRequest, LoginResponse } from '../types'

import { login } from '@/api/auth/requests'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      return await login(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'me'] })
    },
  })
}
