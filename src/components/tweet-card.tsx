import React from 'react'

import tonyText from 'tony-text'

import { format } from 'date-fns'

import { TweetButtons } from '@/components/tweet-buttons'

import tony from '@/assets/tony.jpg'
import tagSomeone from '@/utils/tag-someone'
import { cn } from '@/utils/cn'

type TweetCardProps = {
  text: string
} & React.HTMLAttributes<HTMLDivElement>

export const TweetCard = ({ text, className }: TweetCardProps) => {
  const currentTime = format(new Date(), "hh:mm aaaaa'm'")
  const currentDate = format(new Date(), 'MMM dd, yyyy')

  return (
    <article
      className={cn(
        'rounded-xl border border-neutral-200 p-4 transition duration-200 ease-in-out dark:border-neutral-800',
        className,
      )}
    >
      <div className="flex shrink-0 self-start">
        <img className="h-12 w-12 rounded-full" src={tony} alt="Tony picture" />

        <div className="ml-2">
          <div className="font-bold ">tony</div>

          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            @o__tony
          </div>
        </div>
      </div>

      <div
        className="shrink text-lg mt-4"
        dangerouslySetInnerHTML={{
          __html: tonyText(`“${tagSomeone(text)}”`),
        }}
      />

      <div className="my-3 flex items-center text-sm text-neutral-400 dark:text-neutral-500 font-semibold">
        <span className="uppercase">{currentTime}</span>
        <span className="mx-2 h-[2px] w-[2px] rounded-full bg-neutral-400 dark:bg-neutral-500" />
        <span> {currentDate}</span>
      </div>

      <hr className="my-2 border-t border-neutral-200 dark:border-neutral-800" />

      <TweetButtons />
    </article>
  )
}
