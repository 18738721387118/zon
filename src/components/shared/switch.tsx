'use client'

import { cn } from '@/utils/class-names'

interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function Switch({ checked, onCheckedChange, label, disabled = false }: SwitchProps) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
        checked ? 'bg-primary' : 'bg-gray-300',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1',
        )}
      />
      {label && <span className='sr-only'>{label}</span>}
    </button>
  )
}
