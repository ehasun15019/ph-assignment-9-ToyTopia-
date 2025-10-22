import React from 'react'

const ProductDetailsCardDesign = ({pictureURL, toyName, sellerName, sellerEmail, description, }) => {
  return (
    <div>
        <section className='flex justify-center items-center'>
            <img src={pictureURL} alt={toyName} />
        </section>

        <div className="card-body">
            <div className="seller-details">
                <h4 className='font-semibold'>Seller name: {sellerName}</h4>
                <h5 className='font-light'>Seller email:{sellerEmail}</h5>
            </div>

            <div className="product_details">
                <h3 className='font-bold mt-6'>Product Details:</h3>
                <p className='text-gray-400 mt-3'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsCardDesign
