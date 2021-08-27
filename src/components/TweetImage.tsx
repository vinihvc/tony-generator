import React from 'react'

import clsx from 'clsx'

type TweetImageProps = {
  image?: string
  title?: string
}

const TweetImage = ({
  image = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80',
  title,
  className
}: PropsWithClassName<TweetImageProps>) => {
  return (
    <div className={clsx('md:flex-shrink pr-6', className)}>
      <div className="overflow-auto w-full h-[200px] rounded-lg">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
    </div>
  )
}

export default TweetImage
