import { useEffect, useState } from 'react'

type ModeProps = 'light' | 'dark'

const COLOR_KEY = 'color-mode'

const useMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem(COLOR_KEY) || 'light')

  const colorTheme: ModeProps = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)

    localStorage.setItem(COLOR_KEY, theme)
  }, [theme, colorTheme])

  return { colorTheme, setTheme }
}

export default useMode
