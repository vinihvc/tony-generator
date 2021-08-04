import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { toPng } from 'html-to-image'

import { FiSun, FiMoon} from 'react-icons/fi'

import Button from '../components/Button'
import Input from '../components/Input'
import Twitter from '../components/Twitter'

const Home = () => {
  const [value, setValue] = useState('')
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const colorMode = localStorage.getItem('color-mode');

    setMode(colorMode || 'light');
  }, [])

  useEffect(() => {
    localStorage.setItem('color-mode', mode);
  }, [mode])

  const $ref = useRef<HTMLDivElement>(null)

  const isChecked = useMemo(() => {
    if (mode === 'light') {
      return false;
    }

    return true;
  }, [mode])

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

  const toggleColorMode = useCallback(() => {
    setMode(state => state === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <div className={mode}>
      <div className="bg-gray-50 dark:bg-gray-700 flex items-center justify-center h-screen">
        <div className="absolute top-4 right-4 flex items-center justify-center">
          <label htmlFor="toggled" className="flex items-center cursor-pointer">
            <div className="mr-3 text-gray-800 dark:text-gray-300 font-medium text-xl">
              <FiSun />
            </div>  
            <div className="relative">
              <input type="checkbox" checked={isChecked} id="toggled" onClick={toggleColorMode} className="sr-only" />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 text-gray-800 dark:text-gray-300 font-medium text-xl">
              <FiMoon />
            </div>  
          </label>
        </div>

      
      <div className="w-11/12 sm:w-full" style={{maxWidth: '650px'}}>
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
    </div>
  )
}

export default Home
