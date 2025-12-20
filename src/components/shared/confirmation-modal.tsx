'use client'

import { useEffect } from 'react'

import { Button } from './button'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Подтвердить',
  cancelText = 'Отменить',
}: ConfirmationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/50' onClick={onClose} />

      <div className='relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-muted-foreground mt-2 text-sm'>{description}</p>

        <div className='mt-6 flex gap-3'>
          <Button variant='outline' onClick={onClose} className='flex-1'>
            {cancelText}
          </Button>
          <Button onClick={onConfirm} className='flex-1'>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  )
}
