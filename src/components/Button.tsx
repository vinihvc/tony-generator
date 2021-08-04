import React, { HTMLAttributes } from 'react'

type ButtonProps = {
  children?: React.ReactNode
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex justify-center p-4 mx-auto w-full lg:w-3/5 font-bold tracking-wide text-gray-100 bg-twitter-500 hover:bg-twitter-600 rounded-full shadow-lg transition duration-300 ease-in cursor-pointer focus:outline-none"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
