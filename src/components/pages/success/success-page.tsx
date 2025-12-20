'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/button'

import { ClientRoutes } from '@/constants/client-routes'

export function SuccessPage() {
  return (
    <div className='flex min-h-[70vh] items-center justify-center'>
      <div className='mx-auto max-w-md text-center'>
        <div className='mb-6 flex justify-center'>
          <CheckCircle className='h-24 w-24 text-green-500' />
        </div>

        <h1 className='mb-4 text-3xl font-bold'>Заказ успешно оформлен!</h1>

        <p className='text-muted-foreground mb-2'>
          Спасибо за ваш заказ. Мы отправили подтверждение на вашу электронную почту.
        </p>

        <p className='text-muted-foreground mb-8'>
          Наш менеджер свяжется с вами в ближайшее время для уточнения деталей доставки.
        </p>

        <div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href={ClientRoutes.HOME}>
            <Button size='lg' className='w-full sm:w-auto'>
              Вернуться на главную
            </Button>
          </Link>

          <Link href={ClientRoutes.ACCOUNT}>
            <Button size='lg' variant='outline' className='w-full sm:w-auto'>
              Мой профиль
            </Button>
          </Link>
        </div>

        <div className='mt-8 rounded-lg border bg-gray-50 p-4'>
          <h3 className='mb-2 font-semibold'>Что дальше?</h3>
          <ul className='text-muted-foreground space-y-1 text-sm'>
            <li>Проверьте вашу электронную почту</li>
            <li>Ожидайте звонка от менеджера</li>
            <li>Подготовьтесь к получению заказа в выбранное время</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
