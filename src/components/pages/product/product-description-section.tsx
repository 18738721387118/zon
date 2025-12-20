'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/shared/button'
import { ConfirmationModal } from '@/components/shared/confirmation-modal'
import { RatingStars } from '@/components/shared/rating-stars'

import { useCartStore } from '@/store/cart-store'

const MOCK_PRODUCT = {
  id: 'sagan-dailya-001',
  name: 'Саган-дайля',
  price: 3500,
  rating: 4.7,
  reviews: 7,
  image: '/flower-product.png',
  description:
    'Букет из 15 веток ромашковых хризантем, оформленный в крафтовую бумагу. Ширина букета — от 40 до 55 см, в зависимости от степени раскрытия; длина — около 55 см. Упаковка — крафт. Хризантемы — любимые цветы многих людей, полюбившиеся способностью долго стоять в воде, сохраняя свежесть и наполняя пространство приятным ароматом. Указаны примерные размеры, чтобы вы могли представить внешний вид и масштаб, однако фактические параметры могут немного отличаться.',
}

export function ProductDescriptionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    addItem({
      id: MOCK_PRODUCT.id,
      name: MOCK_PRODUCT.name,
      price: MOCK_PRODUCT.price,
      image: MOCK_PRODUCT.image,
    })
    setIsModalOpen(false)
    toast.success('Товар добавлен в корзину')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='flex flex-col items-start gap-2.5'>
        <div className='inline-flex items-center gap-1'>
          <RatingStars rating={MOCK_PRODUCT.rating} />

          <span className='text-foreground text-sm font-medium'>
            ({MOCK_PRODUCT.reviews} отзывов)
          </span>
        </div>

        <div className='text-5xl font-extrabold'>{MOCK_PRODUCT.name}</div>

        <div className='mt-1'>
          <div className='text-md font-medium'>Описание:</div>

          <div className='text-muted-foreground mt-1 text-sm'>{MOCK_PRODUCT.description}</div>
        </div>

        <div className='mt-1'>
          <div className='text-md font-medium'>Цена:</div>

          <div className='flex items-center gap-2 leading-none font-semibold'>
            <span className='text-muted-foreground text-sm line-through'>
              {Math.floor(MOCK_PRODUCT.price * 1.3).toLocaleString('ru-RU')} ₽
            </span>
            <span className='text-lg'>{MOCK_PRODUCT.price.toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>

        <Button
          size='lg'
          className='text-md mt-3 rounded-md font-semibold'
          onClick={handleAddToCart}
        >
          Купить за {MOCK_PRODUCT.price.toLocaleString('ru-RU')} ₽
        </Button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title='Добавить в корзину?'
        description={`Вы действительно хотите добавить "${MOCK_PRODUCT.name}" в корзину?`}
        confirmText='Добавить'
        cancelText='Отменить'
      />
    </>
  )
}
