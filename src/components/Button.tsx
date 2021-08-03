import React, { HTMLAttributes } from 'react'

type ButtonProps = {
  children?: React.ReactNode
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="mx-auto lg:w-3/5 w-full flex justify-center text-gray-100 p-4 rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-twitter-600 shadow-lg bg-twitter-500 cursor-pointer transition ease-in duration-300"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
