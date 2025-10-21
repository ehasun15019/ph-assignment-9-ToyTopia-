import React from 'react'
import './Title.css'

const Title = ({title1, title2}) => {
  return (
    <div className='text-center'>
      <h4 className='font-semibold text-2xl md:text-3xl'>{title1}</h4>
      <p className='mt-2'>{title2}</p>
    </div>
  )
}

export default Title
