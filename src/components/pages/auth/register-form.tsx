'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/shared/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shared/form'
import { Input } from '@/components/shared/input'

import { ClientRoutes } from '@/constants/routes'

import { AuthLayout } from './auth-layout'
import { useRegister } from '@/api/auth/queries/use-register'

const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Имя должно содержать хотя бы 3 символа' })
    .max(32, { message: 'Имя должно содержать не более 32 символов' }),
  email: z.email({ message: 'Введите корректный адрес электронной почты' }),
  phone: z.string().regex(/^\+7\d{10}$/, {
    message: 'Введите корректный телефон',
  }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
    .max(128, { message: 'Пароль должен содержать не более 128 символов' }),
})

type RegisterFormSchema = z.infer<typeof registerSchema>

export function RegisterForm() {
  const router = useRouter()

  const { mutate, isPending } = useRegister()

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
  })

  async function onSubmit(data: RegisterFormSchema) {
    await mutate(data, {
      onSuccess: () => {
        toast.success('Регистрация прошла успешно')
        router.push(ClientRoutes.HOME)
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Произошла ошибка при регистрации')
      },
    })
  }

  return (
    <AuthLayout
      title='Создать аккаунт'
      description='Для регистрации достаточно ввести имя, почту и придумать пароль'
      link={{
        href: ClientRoutes.LOGIN,
        title: 'Войти',
        description: 'Уже есть аккаунт?',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder='Yaroslav' disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Почта</FormLabel>
                  <FormControl>
                    <Input placeholder='yaroslav@zon.dev' disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='+7 (999) 999-99-99'
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='******'
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full' disabled={isPending}>
              Продолжить
            </Button>
          </div>
        </form>
      </Form>
    </AuthLayout>
  )
}
