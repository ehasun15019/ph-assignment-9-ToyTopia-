import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import ReviewCardDesign from "../CardDesign/ReviewCardDesign/ReviewCardDesign";
import "./Review.css"

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"

// swiper module
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/reviewData.json")
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[450px]">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="my-8 px-4 sm:px-10 lg:px-20">
      <div className="review-header mt-10">
        <Title
          title1={<>Hear from Other Happy Parents</>}
          title2={<>Customer testimonials</>}
        />
      </div>

      <div className="slider-section mt-10">
        <Swiper
          className="custom-swiper"
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {reviewData.map((item) => (
            <SwiperSlide key={item.review_id}>
              <div className="ps-6 h-full">
                <ReviewCardDesign
                  review_text={item.review_text}
                  review_summary={item.review_summary}
                  review_date={item.review_date}
                  reviewer_name={item.reviewer_name}
                  reviewer_avatar_url={item.reviewer_avatar_url}
                  rating={item.rating}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
