'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Mail, Phone, Briefcase, Edit2, Save, X } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/shared/avatar'
import { Button } from '@/components/shared/button'
import { Input } from '@/components/shared/input'
import { Label } from '@/components/shared/label'
import { Switch } from '@/components/shared/switch'
import { useProfileStore } from '@/store/profile-store'

export function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false)
  const profile = useProfileStore(state => state.profile)
  const updateProfile = useProfileStore(state => state.updateProfile)
  const togglePreference = useProfileStore(state => state.togglePreference)

  const [editedProfile, setEditedProfile] = useState(profile)

  const handleEdit = () => {
    setEditedProfile(profile)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const handleSave = () => {
    updateProfile(editedProfile)
    setIsEditing(false)
    toast.success('Изменения сохранены')
  }

  const handleInputChange = (field: string, value: string) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className='flex flex-col gap-6'>
      {/* Header with Edit Button */}
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>Профиль</h2>
        {!isEditing ? (
          <Button variant='outline' size='sm' onClick={handleEdit}>
            <Edit2 className='mr-2 h-4 w-4' />
            Редактировать
          </Button>
        ) : (
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' onClick={handleCancel}>
              <X className='mr-2 h-4 w-4' />
              Отменить
            </Button>
            <Button size='sm' onClick={handleSave}>
              <Save className='mr-2 h-4 w-4' />
              Сохранить
            </Button>
          </div>
        )}
      </div>

      {/* Profile Information */}
      <div className='rounded-lg border p-6'>
        <div className='space-y-6'>
          {/* Avatar and Name */}
          <div className='flex items-center gap-6'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src={profile.avatar} alt={profile.fullName} />
              <AvatarFallback className='text-2xl'>
                {profile.fullName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className='flex-1'>
              {!isEditing ? (
                <>
                  <h3 className='text-2xl font-bold'>{profile.fullName}</h3>
                  <p className='text-muted-foreground flex items-center gap-2 text-sm'>
                    <Briefcase className='h-4 w-4' />
                    {profile.jobTitle}
                  </p>
                </>
              ) : (
                <div className='space-y-3'>
                  <div>
                    <Label htmlFor='fullName'>Полное имя</Label>
                    <Input
                      id='fullName'
                      value={editedProfile.fullName}
                      onChange={e => handleInputChange('fullName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor='jobTitle'>Должность</Label>
                    <Input
                      id='jobTitle'
                      value={editedProfile.jobTitle}
                      onChange={e => handleInputChange('jobTitle', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <div>
            <Label className='mb-2 block text-sm font-semibold'>О себе</Label>
            {!isEditing ? (
              <p className='text-muted-foreground text-sm'>{profile.bio}</p>
            ) : (
              <textarea
                value={editedProfile.bio}
                onChange={e => handleInputChange('bio', e.target.value)}
                rows={3}
                className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              />
            )}
          </div>

          {/* Contact Information */}
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <Label className='mb-2 flex items-center gap-2 text-sm font-semibold'>
                <Mail className='h-4 w-4' />
                Email
              </Label>
              {!isEditing ? (
                <p className='text-muted-foreground text-sm'>{profile.email}</p>
              ) : (
                <Input
                  type='email'
                  value={editedProfile.email}
                  onChange={e => handleInputChange('email', e.target.value)}
                />
              )}
            </div>

            <div>
              <Label className='mb-2 flex items-center gap-2 text-sm font-semibold'>
                <Phone className='h-4 w-4' />
                Телефон
              </Label>
              {!isEditing ? (
                <p className='text-muted-foreground text-sm'>{profile.phone}</p>
              ) : (
                <Input
                  type='tel'
                  value={editedProfile.phone}
                  onChange={e => handleInputChange('phone', e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className='rounded-lg border p-6'>
        <h3 className='mb-4 text-lg font-semibold'>Настройки</h3>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <Label className='font-medium'>Email-уведомления</Label>
              <p className='text-muted-foreground text-sm'>
                Получать уведомления о новых заказах и акциях
              </p>
            </div>
            <Switch
              checked={profile.preferences.emailNotifications}
              onCheckedChange={() => togglePreference('emailNotifications')}
              disabled={isEditing}
            />
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <Label className='font-medium'>Темная тема</Label>
              <p className='text-muted-foreground text-sm'>
                Использовать темную тему оформления
              </p>
            </div>
            <Switch
              checked={profile.preferences.darkMode}
              onCheckedChange={() => togglePreference('darkMode')}
              disabled={isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
