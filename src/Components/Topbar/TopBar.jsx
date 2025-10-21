import React from 'react'
import { assets } from '../../assets/assets'
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router';

const TopBar = () => {
  return (
    <div className='className="h-20 bg-cover bg-center py-6 px-20 text-white flex flex-col md:flex-row justify-between items-center' style={{ backgroundImage: `url(${assets.toolbar})` }}>
      <div className='flex gap-5 items-center'>
        <CiDeliveryTruck style={{ color: "white", fontSize: "24px" }}  />
        <p>Free  free shipping with over $150</p>
      </div>

      <div className='flex gap-5 py-4 md:py-0'>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </div>
  )
}

export default TopBar
