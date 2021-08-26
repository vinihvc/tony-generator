import React from 'react'

import Toggle from '../../components/Toggle'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Toggle />

      <main className="flex justify-center items-center px-2 md:px-0 h-screen dark:text-white bg-gray-50 dark:bg-gray-700">
        {children}
      </main>
    </>
  )
}

export default BaseLayout
