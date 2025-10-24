import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductRightCardDesign from "../CardDesign/ProductDetailsCardDesign.jsx/ProductRightCardDesign";
import TryNow from "../TryNow/TryNow";

const ProductDetailsRightSide = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/toysData.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const findProduct = data.find((item) => {
          return item.toyId === parseInt(id);
        });

        setProductDetails(findProduct);
      });
  }, [id]);

  if (!productDetails) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        <ProductRightCardDesign
          key={productDetails.toyId}
          toyName={productDetails.toyName}
          price={productDetails.price}
          rating={productDetails.rating}
          availableQuantity={productDetails.availableQuantity}
          subCategory={productDetails.subCategory}
        />
      </div>

      <div className="my-5 mt-10">
        <TryNow></TryNow>
      </div>
    </div>
  );
};

export default ProductDetailsRightSide;
