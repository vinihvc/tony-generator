import React from 'react'

const TweetImage = () => {
  return (
    <div className="md:flex-shrink pt-3 pr-6">
      <div
        className="w-full h-[200px] bg-center bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80")'
        }}
      >
        <img
          className="w-full h-full opacity-0"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=448&amp;q=80"
          alt=""
        />
      </div>
    </div>
  )
}

export default TweetImage
