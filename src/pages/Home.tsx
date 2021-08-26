import React, { useRef, useState } from 'react'

import generate from '../libs/phrase-generator'

import Button from '../components/Button'
import Input from '../components/Input'
import BaseLayout from '../layouts/Base'
import TweetCard from '../components/TweetCard'

import downloadImage from '../utils/download-image'

const Home = () => {
  const [value, setValue] = useState('')

  const $ref = useRef<HTMLDivElement>(null)

  const onGeneratePhrase = () => setValue(generate())

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <BaseLayout>
      <div className="sm:w-full" style={{ maxWidth: '650px' }}>
        <div className="flex items-center">
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Tony quotes"
          />

          <div className="mx-3">or</div>

          <Button onClick={onGeneratePhrase}>Generate</Button>
        </div>

        <div ref={$ref} className="p-1">
          <TweetCard text={value} className="mt-5" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <Button
            size="lg"
            className="w-full md:w-2/4"
            onClick={() => downloadImage($ref)}
          >
            Download
          </Button>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
