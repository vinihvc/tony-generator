import React, { useRef, useState } from 'react'

import generate from '../libs/phrase-generator'

import Button from '../components/Button'
import Input from '../components/Input'
import Twitter from '../components/Twitter'
import BaseLayout from '../layouts/Base'
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
      <div className="w-11/12 sm:w-full" style={{ maxWidth: '650px' }}>
        <div className="flex items-center">
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Tony quotes"
          />

          <div className="mx-3">or</div>

          <button
            className="py-2 px-5 font-medium text-white bg-twitter-500 hover:bg-twitter-600 rounded-full hover:cursor-pointer"
            onClick={onGeneratePhrase}
          >
            Generate
          </button>
        </div>

        <div ref={$ref} className="p-1">
          <Twitter text={value} className="mt-5" />
        </div>

        <div className="flex justify-center items-center mt-5">
          <Button onClick={() => downloadImage($ref)}>Download</Button>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
