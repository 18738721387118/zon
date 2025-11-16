import { useMutation, useQueryClient } from '@tanstack/react-query'

import { register } from '../requests'
import { RegisterRequest, RegisterResponse } from '../types'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (data: RegisterRequest) => {
      return await register(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'me'] })
    },
  })
}
