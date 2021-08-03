import React, { HTMLAttributes } from 'react'

type InputProps = {
  value?: string
} & HTMLAttributes<HTMLInputElement>

const Input = ({ value, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className="
      text-sm 
      sm:text-base
       relative 
       w-full border
        rounded 
        placeholder-gray-400
         focus:border-twitter-500 
         focus:outline-none
          py-2
          px-2 
          "
      {...props}
      value={value}
    />
  )
}

export default Input
