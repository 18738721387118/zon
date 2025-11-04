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

const signUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Имя должно содержать хотя бы 3 символа' })
    .max(32, { message: 'Имя должно содержать не более 32 символов' }),
  email: z.email({ message: 'Введите корректный адрес электронной почты' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
    .max(128, { message: 'Пароль должен содержать не более 128 символов' }),
})

type SignUpFormSchema = z.infer<typeof signUpSchema>

export function SignUpForm() {
  // const router = useRouter()

  // const { mutate, isPending } = useRegister()

  const isPending = false

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: SignUpFormSchema) {
    // await mutate(data, {
    //   onSuccess: () => {
    //     router.push(ClientRoutes.EMAIL_NOTIFICATION)
    //     toast.success('Письмо с подтверждением отправлено на почту')
    //   },
    //   onError: (error: Error) => {
    //     toast.error(error.message || 'Произошла ошибка при регистрации')
    //   },
    // })
  }

  return (
    <AuthLayout
      title='Создать аккаунт'
      description='Для регистрации достаточно ввести имя, email и придумать пароль'
      link={{
        href: ClientRoutes.SIGN_IN,
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
