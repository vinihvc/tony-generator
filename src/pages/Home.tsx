import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { toPng } from 'html-to-image'

import { FiSun, FiMoon } from 'react-icons/fi'

import generate from "../utils/phrase-generator"

import Button from '../components/Button'
import Input from '../components/Input'
import Twitter from '../components/Twitter'

const Home = () => {
  const [value, setValue] = useState('')
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const colorMode = localStorage.getItem('color-mode')

    setMode(colorMode || 'light')
  }, [])

  useEffect(() => {
    localStorage.setItem('color-mode', mode)
  }, [mode])

  const $ref = useRef<HTMLDivElement>(null)

  const isChecked = useMemo(() => {
    if (mode === 'light') {
      return false
    }

    return true
  }, [mode])

  const onButtonClick = useCallback(() => {
    if (!$ref.current) return

    toPng($ref.current).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'tony.png'
      link.href = dataUrl
      link.click()
    })
  }, [$ref])

  const onGeneratePhrase = () => setValue(generate())

  const toggleColorMode = useCallback(() => {
    setMode((state) => (state === 'light' ? 'dark' : 'light'))
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className={mode}>
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-700">
        <div className="flex absolute top-4 right-4 justify-center items-center">
          <label htmlFor="toggled" className="flex items-center cursor-pointer">
            <div className="mr-3 text-xl font-medium text-gray-800 dark:text-gray-300">
              <FiSun />
            </div>
            <div className="relative">
              <input
                type="checkbox"
                checked={isChecked}
                id="toggled"
                onChange={toggleColorMode}
                className="sr-only"
              />
              <div className="block w-14 h-8 bg-gray-600 rounded-full"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition dot"></div>
            </div>
            <div className="ml-3 text-xl font-medium text-gray-800 dark:text-gray-300">
              <FiMoon />
            </div>
          </label>
        </div>

        <div className="w-11/12 sm:w-full" style={{ maxWidth: '650px' }}>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Tony quotes"
          />

          <div ref={$ref} className="p-1">
            <Twitter text={value} className="mt-5" />
          </div>

          <div className="flex justify-center items-center mt-5">
            <Button onClick={onButtonClick}>Download</Button>
            <Button onClick={onGeneratePhrase}>Generate phrase</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
