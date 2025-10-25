import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='flex flex-col  h-auto justify-center items-center text-center'>
      <div>
        <img src={assets.error} className='w-80' alt="" />
      </div>

      <div>
        <h3 className='text-3xl mt-2'>Page Not found</h3>
        <Link to="/" className='text-blue-500'>Back to home</Link>
      </div>
    </div>
  )
}

export default Error
