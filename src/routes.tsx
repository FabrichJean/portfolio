import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrincipalPage from './pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
      </Routes>
    </BrowserRouter>
  )
}