import React from 'react'

import generate from '@/libs/phrase-generator'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { TweetCard } from '@/components/tweet-card'

import downloadImage from '@/utils/download-image'

export const HomePage = () => {
  const [value, setValue] = React.useState('')

  const $ref = React.useRef<HTMLDivElement>(null)

  const onGeneratePhrase = () => setValue(generate())

  return (
    <div className="sm:w-full" style={{ maxWidth: '650px' }}>
      <div className="mb-5 flex items-center">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tony quotes"
        />

        <div className="mx-3 text-neutral-400 dark:text-neutral-200">or</div>

        <Button onClick={onGeneratePhrase}>Generate</Button>
      </div>

      <div ref={$ref}>
        <TweetCard text={value} />
      </div>

      <div className="mt-5 flex items-center justify-center">
        <Button
          size="lg"
          className="w-full md:w-2/4"
          onClick={() => downloadImage($ref)}
        >
          Download
        </Button>
      </div>
    </div>
  )
}
