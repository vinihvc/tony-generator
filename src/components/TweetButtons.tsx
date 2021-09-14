import React, { memo } from 'react'

import clsx from 'clsx'

import { Chat, Like, Retweet, Share } from './icons'
import randomize from '../utils/randomize'

const baseStyle =
  'flex flex-1 text-gray-400 justify-center transition duration-300 ease-in-out '

const TweetButtons = ({ className }: PropsWithClassName) => {
  const buttons = [
    {
      count: randomize(),
      icon: <Chat />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500'
    },
    {
      count: randomize(),
      icon: <Retweet />,
      text: 'hover:text-retweet-500',
      bg: 'group-hover:bg-retweet-500'
    },
    {
      count: randomize(),
      icon: <Like />,
      text: 'hover:text-like-500',
      bg: 'group-hover:bg-like-500'
    },
    {
      icon: <Share />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500'
    }
  ]

  return (
    <div className={clsx('flex items-center', className)}>
      {buttons.map((button, index) => (
        <div key={index} className={baseStyle}>
          <div
            className={clsx(
              'group flex items-center cursor-pointer',
              button.text
            )}
          >
            <div
              className={clsx(
                'p-2 group-hover:bg-opacity-20 rounded-full',
                button.bg
              )}
            >
              {button.icon}
            </div>

            {button.count && (
              <div className="hidden md:block ml-1 text-xs">
                {button.count} k
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(TweetButtons)
