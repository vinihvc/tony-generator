import { toPng } from 'html-to-image'
import React from 'react'

const downloadImage = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return

  toPng(ref.current).then((dataUrl) => {
    const link = document.createElement('a')
    link.download = 'tony.png'
    link.href = dataUrl
    link.click()
  })
}

export default downloadImage
