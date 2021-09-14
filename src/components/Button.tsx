import React, { HTMLAttributes } from 'react'

import clsx from 'clsx'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
} & HTMLAttributes<HTMLButtonElement>

const baseStyle =
  'flex justify-center items-center font-semibold rounded-full transition duration-300 ease-in cursor-pointer focus:outline-none text-white bg-twitter-500 hover:bg-twitter-600'

const sizes = {
  sm: 'px-5 h-8',
  md: 'px-5 h-10 text-sm',
  lg: 'px-10 h-12'
}

const Button = ({
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(baseStyle, sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
