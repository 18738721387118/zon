import { useMutation, useQueryClient } from '@tanstack/react-query'

import { logout } from '../requests'
import { LogoutResponse } from '../types'

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation<LogoutResponse, Error>({
    mutationFn: async () => {
      return await logout()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'me'] })
    },
  })
}
