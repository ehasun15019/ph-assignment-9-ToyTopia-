import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="my-6 flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          {user && (
            <img src={user.photoURL} alt="" className="rounded-full w-50" />
          )}
        </figure>
        <div className="card-body items-center text-center">
          {user && <h2 className="card-title">Name: {user.displayName}</h2>}

          {user && <p>Email: {user.email}</p>}

          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
