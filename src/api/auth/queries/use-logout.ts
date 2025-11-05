import { useMutation, useQueryClient } from '@tanstack/react-query'

import { LogoutResponse } from '../entities'
import { logout } from '../requests'

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
