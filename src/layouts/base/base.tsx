import { Switch } from '@/components/switch'
import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
  return (
    <>
      <Switch />

      <main className="flex h-screen items-center justify-center max-sm:px-2">
        <Outlet />
      </main>
    </>
  )
}
