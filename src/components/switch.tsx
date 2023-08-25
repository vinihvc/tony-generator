import { FiSun, FiMoon } from 'react-icons/fi'

import useMode from '@/hooks/use-mode'

export const Switch = () => {
  const { colorTheme, setTheme } = useMode()

  return (
    <div className="absolute right-4 top-4 flex items-center justify-center">
      <label
        htmlFor="toggled"
        className="flex cursor-pointer items-center text-neutral-800 dark:text-neutral-300"
      >
        <div className="mr-3 text-xl font-medium">
          <FiSun />
        </div>

        <div className="relative">
          <input
            id="toggled"
            type="checkbox"
            checked={colorTheme === 'light'}
            onChange={() => setTheme(colorTheme)}
            className="sr-only peer/checkbox"
          />

          <div className="block h-8 w-14 rounded-full bg-neutral-600" />

          <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition peer-checked/checkbox:translate-x-full" />
        </div>

        <div className="ml-3 text-xl font-medium">
          <FiMoon />
        </div>
      </label>
    </div>
  )
}
