import React from 'react'
import Navbar from './components/Common/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Common/Footer'

function App() {
  return (
    <>
    <main>
      <Navbar/>
    <Outlet/>
    </main>
    <Footer/>
    </>

  )
}

export default App