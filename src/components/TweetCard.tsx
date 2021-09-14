import React from 'react'

import clsx from 'clsx'

import tonyText from 'tony-text'

import { format } from 'date-fns'

import TweetButtons from './TweetButtons'
// import TweetImage from './TweetImage'

import tony from '../assets/tony.jpg'
import tagSomeone from '../utils/tag-someone'

type TweetCardProps = {
  text: string
}

const TweetCard = ({ text, className }: PropsWithClassName<TweetCardProps>) => {
  const currentTime = format(new Date(), "hh:mm aaaaa'm'")
  const currentDate = format(new Date(), 'MMM dd, yyyy')

  return (
    <article
      className={clsx(
        'p-4 text-gray-600 dark:text-white bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 transition duration-300 ease-in-out',
        className
      )}
    >
      <div className="flex flex-shrink-0 self-start">
        <img className="w-12 h-12 rounded-full" src={tony} alt="Tony picture" />

        <div className="ml-2">
          <div className="font-bold ">tony</div>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            @antoniell_
          </div>
        </div>
      </div>

      <div
        className="flex-shrink mt-4 text-lg font-medium"
        dangerouslySetInnerHTML={{
          __html: tonyText(`“${tagSomeone(text)}”`)
        }}
      />

      <div className="flex items-center my-3 text-sm dark:text-gray-300">
        <span className="uppercase">{currentTime}</span>
        <span className="mx-2 w-[2px] h-[2px] bg-gray-400 rounded-full" />
        <span> {currentDate}</span>
      </div>

      <hr className="mt-2 mb-1 text-gray-200 dark:text-gray-500" />

      {/* <TweetImage className="pt-3" /> */}

      <TweetButtons />
    </article>
  )
}

export default TweetCard
