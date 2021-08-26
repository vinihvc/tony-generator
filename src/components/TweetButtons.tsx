import React from 'react'

import { Chat, Like, Retweet, Share } from './icons'

const TweetButtons = ({ className }: PropsWithClassName) => {
  const baseStyle =
    'flex flex-1 items-center text-gray-400 transition duration-300 ease-in-out cursor-pointer '

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${baseStyle} hover:text-blue-400`}>
        <Chat />

        <div className="hidden md:block ml-2 text-xs">12.3 k</div>
      </div>

      <div className={`${baseStyle} hover:text-green-400`}>
        <Retweet />

        <div className="hidden md:block ml-2 text-xs">14 k</div>
      </div>

      <div className={`${baseStyle} hover:text-like`}>
        <Like />

        <div className="hidden md:block ml-2 text-xs">14 k</div>
      </div>

      <div className={`${baseStyle} hover:text-blue-400`}>
        <Share />
      </div>
    </div>
  )
}

export default TweetButtons
