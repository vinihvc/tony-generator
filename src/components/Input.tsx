import React, { HTMLAttributes } from 'react'

import clsx from 'clsx'

type InputProps = {
  value?: string
} & HTMLAttributes<HTMLInputElement>

const Input = ({
  value,
  className,
  ...props
}: PropsWithClassName<InputProps>) => {
  return (
    <input
      type="text"
      value={value}
      className={clsx(
        'py-2 px-4 w-full text-sm placeholder-gray-400 text-black rounded-full border focus:border-twitter-500 focus:outline-none',
        className
      )}
      {...props}
    />
  )
}

export default Input
