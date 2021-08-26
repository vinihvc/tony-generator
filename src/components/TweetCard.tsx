import React from 'react'

import tonyText from 'tony-text'

// import TweetImage from './TweetImage'
import TweetButtons from './TweetButtons'

import tony from '../assets/tony.jpg'

type TweetCardProps = {
  text: string
}

const TweetCard = ({ text, className }: PropsWithClassName<TweetCardProps>) => {
  return (
    <article
      className={`text-gray-600 dark:text-white bg-white dark:bg-gray-800 rounded-xl transition duration-300 ease-in-out ${className}`}
    >
      <div className="flex gap-3 p-5">
        <div className="flex flex-shrink-0 self-start">
          <img
            className="w-12 h-12 rounded-full"
            src={tony}
            alt="Tony picture"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center font-medium leading-6">
            tony
            <span className="ml-2 text-sm leading-5 text-gray-400 group-hover:text-gray-300 transition duration-150 ease-in-out">
              @antoniell_
            </span>
            <span className="mx-2 w-[1.5px] h-[1.5px] bg-gray-400 rounded-full" />
            <span className="text-sm leading-5 text-gray-400 group-hover:text-gray-300 transition duration-150 ease-in-out">
              3h
            </span>
          </div>

          <p className="flex-shrink">
            {tonyText(
              `“${
                text ||
                'Quem faz código bom é quem não se garante com bug em produção'
              }”`
            )}
          </p>

          {/* <TweetImage /> */}

          <TweetButtons className="mt-4" />
        </div>
      </div>
    </article>
  )
}

export default TweetCard
