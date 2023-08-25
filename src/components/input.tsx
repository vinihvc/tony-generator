import { cn } from '@/utils/cn'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  const { className, ...rest } = props
  return (
    <input
      type="text"
      className={cn(
        'w-full rounded-full bg-transparent border border-neutral-200 dark:border-neutral-800 px-4 h-10 text-sm placeholder:text-neutral-400 focus:outline-none',
        className,
      )}
      {...rest}
    />
  )
}
