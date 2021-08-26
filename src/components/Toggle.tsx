import React from 'react'

import { FiSun, FiMoon } from 'react-icons/fi'

import useMode from '../hooks/use-mode'

const Toggle = () => {
  const { colorTheme, setTheme } = useMode()

  return (
    <div className="flex absolute top-4 right-4 justify-center items-center">
      <label htmlFor="toggled" className="flex items-center cursor-pointer">
        <div className="mr-3 text-xl font-medium text-gray-800 dark:text-gray-300">
          <FiSun />
        </div>

        <div className="relative">
          <input
            id="toggled"
            type="checkbox"
            checked={colorTheme === 'light'}
            onChange={() => setTheme(colorTheme)}
            className="sr-only"
          />

          <div className="block w-14 h-8 bg-gray-600 rounded-full" />

          <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition dot" />
        </div>

        <div className="ml-3 text-xl font-medium text-gray-800 dark:text-gray-300">
          <FiMoon />
        </div>
      </label>
    </div>
  )
}

export default Toggle
