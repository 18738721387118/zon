'use client'

import { Eye, EyeOff } from 'lucide-react'
import { type ComponentProps, forwardRef, useState } from 'react'

import { cn } from '@/utils/class-names'

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    const [typeState, setTypeState] = useState(type)

    const isPassword = type === 'password'

    return (
      <div className='relative w-full'>
        <input
          type={isPassword ? typeState : type}
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-none transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            className,
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <div
            className={cn(
              'absolute right-0 bottom-0 flex h-full items-center justify-center px-3',
            )}
          >
            <button
              className={cn(
                'h-fit w-fit rounded-sm transition-all outline-none',
                'text-gray-400 dark:text-gray-600',
                'hover:text-gray-500 hover:dark:text-gray-500',
              )}
              type='button'
              onClick={() => {
                setTypeState(typeState === 'password' ? 'text' : 'password')
              }}
            >
              <span className='sr-only'>
                {typeState === 'password' ? 'Show password' : 'Hide password'}
              </span>
              {typeState === 'password' ? (
                <Eye aria-hidden='true' className='size-5 shrink-0' />
              ) : (
                <EyeOff aria-hidden='true' className='size-5 shrink-0' />
              )}
            </button>
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
