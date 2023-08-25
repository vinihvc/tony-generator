import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { NotFoundPage } from './pages/not-found'
import { BaseLayout } from './layouts/base/base'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
