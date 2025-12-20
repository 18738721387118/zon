import { ProfileCard } from './profile-card'

export function Account() {
  return (
    <>
      <div className='mb-8 space-y-1.5'>
        <h1 className='text-2xl font-medium'>Настройки аккаунта</h1>
        <p className='text-muted-foreground text-sm'>
          Управление настройками вашего аккаунта
        </p>
      </div>

      <ProfileCard />
    </>
  )
}
