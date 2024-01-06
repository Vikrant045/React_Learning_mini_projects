import { useState } from 'react'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import  Home from './components/home/Home'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>    
   
  )
}

export default App
