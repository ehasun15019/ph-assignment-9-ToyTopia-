import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'

const HomeLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar></Navbar>
      </header>

      <main className='flex-1'>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default HomeLayout
