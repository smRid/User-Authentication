
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Auth/Login/Login'
import Register from './Pages/Auth/Register/Register'
import ForgetPassword from './Pages/Auth/ForgetPassword/ForgetPassword'
import VerifyEmail from './Pages/Auth/VerifyEmail/VerifyEmail'

import ResetPassword from './Pages/Auth/ResetPassword/ResetPassword';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword />} />
          <Route path='/verify-email/:token' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
