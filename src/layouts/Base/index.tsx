import React from 'react'

import Toggle from '../../components/Toggle'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main>
      <Toggle />

      <div className="flex justify-center items-center h-screen dark:text-white bg-gray-50 dark:bg-gray-700">
        {children}
      </div>
    </main>
  )
}

export default BaseLayout
