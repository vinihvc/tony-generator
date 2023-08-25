import React, { memo } from 'react'

import { Chat, Like, Retweet, Share } from './icons'
import randomize from '@/utils/randomize'
import { cn } from '@/utils/cn'

const baseStyle =
  'flex flex-1 text-neutral-400 justify-center transition duration-200 ease-in-out '

type TweetButtonsProps = React.HTMLAttributes<HTMLDivElement>

export const TweetButtons = memo((props: TweetButtonsProps) => {
  const { className, ...rest } = props

  const buttons = [
    {
      count: randomize(),
      icon: <Chat />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500',
    },
    {
      count: randomize(),
      icon: <Retweet />,
      text: 'hover:text-retweet-500',
      bg: 'group-hover:bg-retweet-500',
    },
    {
      count: randomize(),
      icon: <Like />,
      text: 'hover:text-like-500',
      bg: 'group-hover:bg-like-500',
    },
    {
      icon: <Share />,
      text: 'hover:text-twitter-500',
      bg: 'group-hover:bg-twitter-500',
    },
  ]

  return (
    <div className={cn('flex items-center', className)} {...rest}>
      {buttons.map((button, index) => (
        <div key={index} className={baseStyle}>
          <div
            className={cn(
              'group flex cursor-pointer items-center',
              button.text,
            )}
          >
            <div
              className={cn(
                'rounded-full p-2 group-hover:bg-opacity-20',
                button.bg,
              )}
            >
              {button.icon}
            </div>

            {button.count && (
              <div className="ml-1 hidden text-xs md:block">
                {button.count} k
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
})
