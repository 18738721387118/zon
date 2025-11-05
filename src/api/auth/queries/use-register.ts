import { useMutation, useQueryClient } from '@tanstack/react-query'

import { RegisterRequest, RegisterResponse } from '../entities'
import { register } from '../requests'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation<RegisterResponse, Error, RegisterRequest>({
    mutationFn: async (data: RegisterRequest) => {
      return await register(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
}
