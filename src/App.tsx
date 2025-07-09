import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
