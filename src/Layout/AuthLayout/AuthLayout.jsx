import React from 'react'
import TopBar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AuthLayout
