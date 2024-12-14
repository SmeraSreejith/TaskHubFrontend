import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/dash' element={<Dashboard/>} />
        
      </Routes>
      
      <ToastContainer/>
    </>
  )
}

export default App
