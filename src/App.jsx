import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {
  return (
    <main>
      <Navbar/>
    <Outlet/>
    </main>
  )
}

export default App