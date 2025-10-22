import React, { useEffect, useState } from "react";
import HomeCardDesign from "../CardDesign/HomeCardDesign/HomeCardDesign";
import Title from "../Title/Title";
import { Link } from "react-router";

const HomeCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/toysData.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data);
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
    <div className="my-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <Title
        title1={<>Top picks for your little ones</>}
        title2={<>Here the popular toys</>}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 lg:gap-10 mt-10">
        {newsData.slice(0, 6).map((item) => (
          <Link key={item.id}>
            <HomeCardDesign
              pictureURL={item.pictureURL}
              toyName={item.toyName}
              price={item.price}
              availableQuantity={item.availableQuantity}
              description={item.description}
              rating={item.rating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
