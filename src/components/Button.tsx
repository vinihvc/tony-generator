import { cn } from '@/utils/cn'
import React from 'react'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const baseStyle =
  'flex justify-center font-semibold items-center rounded-full transition duration-200 ease-in cursor-pointer focus:outline-none text-white bg-twitter-500 hover:bg-twitter-600'

const sizes = {
  sm: 'px-5 h-8',
  md: 'px-5 h-10 text-sm',
  lg: 'px-10 h-12',
}

export const Button = (props: ButtonProps) => {
  const { size = 'md', type = 'submit', className, children, ...rest } = props

  return (
    <button
      className={cn(baseStyle, sizes[size], className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
