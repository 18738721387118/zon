'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/shared/button'
import { ConfirmationModal } from '@/components/shared/confirmation-modal'
import { RatingStars } from '@/components/shared/rating-stars'

import { useCartStore } from '@/store/cart-store'
import { Flower } from '@/data/flowers'

interface ProductDescriptionSectionProps {
  flower: Flower
}

export function ProductDescriptionSection({ flower }: ProductDescriptionSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleAddToCart = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    addItem({
      id: flower.id,
      name: flower.name,
      price: flower.price,
      image: flower.image,
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
          <RatingStars rating={flower.rating} />

          <span className='text-foreground text-sm font-medium'>({flower.reviews} отзывов)</span>
        </div>

        <div className='text-5xl font-extrabold'>{flower.name}</div>

        <div className='mt-1'>
          <div className='text-md font-medium'>Описание:</div>

          <div className='text-muted-foreground mt-1 text-sm'>{flower.description}</div>
        </div>

        <div className='mt-1'>
          <div className='text-md font-medium'>Цена:</div>

          <div className='flex items-center gap-2 leading-none font-semibold'>
            <span className='text-muted-foreground text-sm line-through'>
              {flower.originalPrice.toLocaleString('ru-RU')} ₽
            </span>
            <span className='text-lg'>{flower.price.toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>

        <Button
          size='lg'
          className='text-md mt-3 rounded-md font-semibold'
          onClick={handleAddToCart}
        >
          Купить за {flower.price.toLocaleString('ru-RU')} ₽
        </Button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title='Добавить в корзину?'
        description={`Вы действительно хотите добавить "${flower.name}" в корзину?`}
        confirmText='Добавить'
        cancelText='Отменить'
      />
    </>
  )
}
