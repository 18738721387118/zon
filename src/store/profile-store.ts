import { create } from 'zustand'

export interface UserProfile {
  avatar: string
  fullName: string
  jobTitle: string
  email: string
  phone: string
  bio: string
  preferences: {
    emailNotifications: boolean
    darkMode: boolean
  }
}

interface ProfileStore {
  profile: UserProfile
  updateProfile: (profile: Partial<UserProfile>) => void
  togglePreference: (key: keyof UserProfile['preferences']) => void
}

const MOCK_PROFILE: UserProfile = {
  avatar: '/flower-product.png',
  fullName: 'Ярослав Иванов',
  jobTitle: 'Продавец-консультант',
  email: 'yaroslav@zon.dev',
  phone: '+7 (999) 123-45-67',
  bio: 'Я занимаюсь продажей цветов и других товаров для дома. Люблю помогать клиентам найти то, что они ищут.',
  preferences: {
    emailNotifications: true,
    darkMode: false,
  },
}

export const useProfileStore = create<ProfileStore>(set => ({
  profile: MOCK_PROFILE,

  updateProfile: (updates: Partial<UserProfile>) => {
    set(state => ({
      profile: {
        ...state.profile,
        ...updates,
        preferences: {
          ...state.profile.preferences,
          ...(updates.preferences || {}),
        },
      },
    }))
  },

  togglePreference: (key: keyof UserProfile['preferences']) => {
    set(state => ({
      profile: {
        ...state.profile,
        preferences: {
          ...state.profile.preferences,
          [key]: !state.profile.preferences[key],
        },
      },
    }))
  },
}))
