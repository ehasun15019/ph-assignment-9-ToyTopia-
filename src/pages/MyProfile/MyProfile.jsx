import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { LiaEdit } from "react-icons/lia";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="my-6 flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          {user && (
            <img src={user.photoURL} alt="" className="rounded-full w-20 md:w-30 lg:w-50" />
          )}
        </figure>
        <div className="card-body items-center text-center">
          {user && <h2 className="card-title">Name: {user.displayName}</h2>}

          {user && <p>Email: {user.email}</p>}

          <div className="card-actions">
            <Link to="/auth/updateProfile" className="btn btn-primary"><LiaEdit size={20} /> Edit Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
