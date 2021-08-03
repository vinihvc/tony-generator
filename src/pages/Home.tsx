import { toPng } from 'html-to-image'
import React, { useCallback, useRef, useState } from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import Twitter from '../components/Twitter'

const Home = () => {
  const [value, setValue] = useState('')

  const $ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if ($ref.current === null) {
      return
    }

    toPng($ref.current, {}).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'tony.png'
      link.href = dataUrl
      link.click()
    })
  }, [$ref])

  return (
    <div className="bg-gray-50 dark:bg-black flex items-center justify-center h-screen">
      <div>
        <Input
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder="Tony quotes"
        />

        <div ref={$ref} className="p-1">
          <Twitter text={value} className="mt-5" />
        </div>

        <div className="d-flex justify-center items-center mt-5">
          <Button onClick={onButtonClick}>Download</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
