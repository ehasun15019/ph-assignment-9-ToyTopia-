import React, { useEffect, useState } from "react";
import HomeCardDesign from "../CardDesign/HomeCardDesign/HomeCardDesign";
import { Link } from "react-router";
import AllCardDesign from "../CardDesign/AllCardsDesign/AllCardDesign";

const ShowAllCards = () => {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/toysData.json")
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 sm:gap-8 lg:gap-10 mt-10">
        {toysData.map((item) => (
          <Link key={item.id} to={`/product/productDetails/${item.toyId}`}>
            <AllCardDesign
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

export default ShowAllCards;
