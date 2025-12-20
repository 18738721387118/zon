'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { CreditCard, MapPin, Phone, User, Calendar, Clock } from 'lucide-react'

import { Button } from '@/components/shared/button'
import { Input } from '@/components/shared/input'
import { Label } from '@/components/shared/label'
import { ClientRoutes } from '@/constants/client-routes'
import { useCartStore } from '@/store/cart-store'

const DELIVERY_TIMES = [
  { value: 'morning', label: 'Утро (9:00 - 12:00)' },
  { value: 'afternoon', label: 'День (12:00 - 15:00)' },
  { value: 'evening', label: 'Вечер (15:00 - 18:00)' },
  { value: 'night', label: 'Вечер (18:00 - 21:00)' },
]

export function CheckoutPage() {
  const router = useRouter()
  const items = useCartStore(state => state.items)
  const totalPrice = useCartStore(state => state.getTotalPrice())
  const clearCart = useCartStore(state => state.clearCart)

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    deliveryDate: '',
    deliveryTime: '',
    cardNumber: '',
    cvv: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.fullName ||
      !formData.address ||
      !formData.phone ||
      !formData.deliveryDate ||
      !formData.deliveryTime
    ) {
      toast.error('Пожалуйста, заполните все обязательные поля')
      return
    }

    clearCart()
    toast.success('Заказ успешно оформлен!')
    router.push(ClientRoutes.SUCCESS)
  }

  if (items.length === 0) {
    return (
      <div className='mx-auto max-w-4xl py-8'>
        <div className='rounded-lg border p-8 text-center'>
          <h2 className='text-2xl font-bold'>Корзина пуста</h2>
          <p className='text-muted-foreground mt-2'>
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Button className='mt-4' onClick={() => router.push(ClientRoutes.HOME)}>
            Перейти к покупкам
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-6xl py-8'>
      <h1 className='mb-8 text-3xl font-bold'>Оформление заказа</h1>

      <form onSubmit={handlePlaceOrder}>
        <div className='grid gap-8 lg:grid-cols-3'>
          {/* Left Column - Forms */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Shipping Information */}
            <div className='rounded-lg border p-6'>
              <h2 className='mb-4 text-xl font-semibold'>Информация о доставке</h2>

              <div className='space-y-4'>
                <div>
                  <Label htmlFor='fullName' className='flex items-center gap-2'>
                    <User className='h-4 w-4' />
                    Полное имя *
                  </Label>
                  <Input
                    id='fullName'
                    value={formData.fullName}
                    onChange={e => handleInputChange('fullName', e.target.value)}
                    placeholder='Иван Иванов'
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='address' className='flex items-center gap-2'>
                    <MapPin className='h-4 w-4' />
                    Адрес доставки *
                  </Label>
                  <Input
                    id='address'
                    value={formData.address}
                    onChange={e => handleInputChange('address', e.target.value)}
                    placeholder='ул. Пушкина, д. 10, кв. 5'
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='phone' className='flex items-center gap-2'>
                    <Phone className='h-4 w-4' />
                    Телефон *
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    placeholder='+7 (999) 123-45-67'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Delivery Slot */}
            <div className='rounded-lg border p-6'>
              <h2 className='mb-4 text-xl font-semibold'>Время доставки</h2>

              <div className='grid gap-4 sm:grid-cols-2'>
                <div>
                  <Label htmlFor='deliveryDate' className='flex items-center gap-2'>
                    <Calendar className='h-4 w-4' />
                    Дата доставки *
                  </Label>
                  <Input
                    id='deliveryDate'
                    type='date'
                    value={formData.deliveryDate}
                    onChange={e => handleInputChange('deliveryDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor='deliveryTime' className='flex items-center gap-2'>
                    <Clock className='h-4 w-4' />
                    Время доставки *
                  </Label>
                  <select
                    id='deliveryTime'
                    value={formData.deliveryTime}
                    onChange={e => handleInputChange('deliveryTime', e.target.value)}
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    required
                  >
                    <option value=''>Выберите время</option>
                    {DELIVERY_TIMES.map(time => (
                      <option key={time.value} value={time.value}>
                        {time.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className='rounded-lg border p-6'>
              <h2 className='mb-4 text-xl font-semibold'>Оплата</h2>

              <div className='space-y-4'>
                <div>
                  <Label htmlFor='cardNumber' className='flex items-center gap-2'>
                    <CreditCard className='h-4 w-4' />
                    Номер карты
                  </Label>
                  <Input
                    id='cardNumber'
                    value={formData.cardNumber}
                    onChange={e => handleInputChange('cardNumber', e.target.value)}
                    placeholder='1234 5678 9012 3456'
                    maxLength={19}
                  />
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  <div>
                    <Label htmlFor='cvv'>CVV</Label>
                    <Input
                      id='cvv'
                      value={formData.cvv}
                      onChange={e => handleInputChange('cvv', e.target.value)}
                      placeholder='123'
                      maxLength={3}
                    />
                  </div>
                </div>

                <p className='text-muted-foreground text-xs'>
                  * Это демонстрационная форма. Данные карты не сохраняются и не обрабатываются.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className='lg:col-span-1'>
            <div className='sticky top-4 rounded-lg border p-6'>
              <h2 className='mb-4 text-xl font-semibold'>Ваш заказ</h2>

              <div className='space-y-3'>
                {items.map(item => (
                  <div key={item.id} className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>
                      {item.name} × {item.quantity}
                    </span>
                    <span className='font-medium'>
                      {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                ))}
              </div>

              <div className='my-4 border-t pt-4'>
                <div className='flex justify-between text-lg font-bold'>
                  <span>Итого:</span>
                  <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>

              <Button type='submit' size='lg' className='w-full'>
                Оформить заказ
              </Button>

              <p className='text-muted-foreground mt-4 text-xs text-center'>
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
