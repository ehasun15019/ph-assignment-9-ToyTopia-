import React from 'react'
import { IoMdStar } from "react-icons/io";

const ProductRightCardDesign = ({toyName, price, rating, availableQuantity, subCategory}) => {
  return (
    <div>
      <section>
        <h3 className='text-2xl font-bold'>{toyName}</h3>
        <p className='text-gray-400'>Subcategory: {subCategory}</p>
        
        <div className='pt-2'>
            <div className="rating-sec flex gap-2 items-center">
              <IoMdStar size={30} style={{color: "gold"}} />
              <p>{rating}</p>
            </div>

            <p className='pt-3 text-[1.3rem] font-semibold'>{price} $</p>
        </div>

        <div className='pt-1'>
            <p>Available Product: {availableQuantity} peace</p>
        </div>

        <div className='mt-3'>
            <button className='bg-[#0F83B2] px-13 text-white py-3 rounded-[0.3rem]'>Add to cart</button>
        </div>
      </section>
    </div>
  )
}

export default ProductRightCardDesign
