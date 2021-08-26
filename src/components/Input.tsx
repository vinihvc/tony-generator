import React, { HTMLAttributes } from 'react'

type InputProps = {
  value?: string
} & HTMLAttributes<HTMLInputElement>

const Input = ({ value, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className="relative py-2 px-4 w-full text-sm sm:text-base placeholder-gray-400 text-black rounded-full border focus:border-twitter-500 focus:outline-none"
      value={value}
      {...props}
    />
  )
}

export default Input
