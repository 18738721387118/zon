'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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

const signInSchema = z.object({
  email: z.email({ message: 'Введите корректный адрес электронной почты' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
    .max(128, { message: 'Пароль должен содержать не более 128 символов' }),
})

type SignInFormSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  // const router = useRouter()

  // const { mutate, isPending } = useLogin()

  const isPending = false

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: SignInFormSchema) {
    // await mutate(data, {
    //   onSuccess: () => {
    //     toast.success('Авторизация прошла успешно')
    //     router.push(ClientRoutes.HOME)
    //   },
    //   onError: (error: Error) => {
    //     toast.error(error.message || 'Произошла ошибка при авторизации')
    //   },
    // })
  }

  return (
    <AuthLayout
      title='Войти в аккаунт'
      description='Для входа на сайт используйте ваш email и пароль, которые были указаны при регистрации на сайте'
      link={{
        href: ClientRoutes.SIGN_UP,
        title: 'Регистрация',
        description: 'Нет аккаунта?',
      }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='space-y-4'>
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
