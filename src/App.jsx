import { BrowserRouter, Routes } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={} />
          <Route path="/login" element={} />
          <Route path="/register" element={} />
          <Route path="/forget-password" element={} />
          <Route path="/reset-password/:token" element={} />
          <Route path="/verify-email" element={} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
