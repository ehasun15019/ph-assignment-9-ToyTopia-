import React from "react";
import { assets } from "../../../assets/assets";
import { IoMdStar } from "react-icons/io";

const ReviewCardDesign = ({
  review_text,
  review_summary,
  review_date,
  reviewer_name,
  reviewer_avatar_url,
  rating,
}) => {
  return (
    <div className="h-full">
      <div
        className="card w-full shadow-sm bg-cover h-full"
        style={{ backgroundImage: `url(${assets.reviewCard})` }}
      >
        <div className="card-body px-5">
          <p className="font-semibold mb-2">{review_summary}</p>
          <p className="card-title text-[0.7rem]">{review_text}</p>

          <div className="flex justify-between items-center">
            <div>
              <img
                src={reviewer_avatar_url}
                alt="avatar image"
                className="w-12 rounded-full"
              />
              <p>{reviewer_name}</p>
            </div>

            <div>
              <p className="flex gap-2 items-center">
                <IoMdStar /> {rating}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <p className="text-end">{review_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardDesign;
