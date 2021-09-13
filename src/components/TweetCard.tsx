import React from 'react'

import clsx from 'clsx'

import tonyText from 'tony-text'

import TweetButtons from './TweetButtons'
// import TweetImage from './TweetImage'

import tony from '../assets/tony.jpg'
import tagSomeone from '../utils/tag-someone'

type TweetCardProps = {
  text: string
}

const TweetCard = ({ text, className }: PropsWithClassName<TweetCardProps>) => {
  return (
    <article
      className={clsx(
        'text-gray-600 dark:text-white bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 transition duration-300 ease-in-out',
        className
      )}
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

          <div
            className="flex-shrink"
            dangerouslySetInnerHTML={{
              __html: tonyText(`“${tagSomeone(text)}”`)
            }}
          />

          {/* <TweetImage className="pt-3" /> */}

          <TweetButtons className="mt-4" />
        </div>
      </div>
    </article>
  )
}

export default TweetCard
