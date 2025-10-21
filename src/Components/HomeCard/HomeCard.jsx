import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'
import HomeCardDesign from '../CardDesign/HomeCardDesign/HomeCardDesign';
import Title from '../Title/Title';

const HomeCard = () => {
 
  const newsData = useLoaderData();
  const { id } = useParams();

  return (
    <div className='my-15 px-50'>
      <div>
        <Title title1={<>Top picks for your little ones</>} title2={<>Here the popular toys</>} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-17'>
          {
            newsData.slice(0, 6).map((item) => {
            return (
                <Link>
                  <HomeCardDesign 
                  key={item.id}
                  pictureURL={item.pictureURL}
                  toyName={item.toyName}
                  price={item.price}
                  availableQuantity={item.availableQuantity}
                  description={item.description}
                  rating={item.rating}
                  />
                </Link>
              )
            })
          }
      </div>

      <div className='mt-6 flex justify-center items-center'>
        <Link className='bg-yellow-300 px-9 py-4 rounded-full'>Show all toys</Link>
      </div>
    </div>
  )
}

export default HomeCard
