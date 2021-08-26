import React, { HTMLAttributes } from 'react'

type InputProps = {
  value?: string
} & HTMLAttributes<HTMLInputElement>

const Input = ({ value, ...props }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      className="py-2 px-4 w-full text-sm placeholder-gray-400 text-black rounded-full border focus:border-twitter-500 focus:outline-none"
      {...props}
    />
  )
}

export default Input
