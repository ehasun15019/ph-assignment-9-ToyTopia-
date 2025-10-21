import React from "react";

const FindCard = ({image, title}) => {
  return (
    <div className="card w-50">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p>
            {title}
        </p>
      </div>
    </div>
  );
};

export default FindCard;
