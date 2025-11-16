'use client'

import { useQuery } from '@tanstack/react-query'

import { getMe } from '../requests'

import { getAccessToken } from '@/utils/cookies'

export const useGetMe = () => {
  const token = getAccessToken()

  const {
    data: me,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: () => getMe(),
    enabled: !!token,
    refetchOnWindowFocus: false,
    staleTime: 5 * 1000,
  })

  return { me, isLoading, isError }
}
