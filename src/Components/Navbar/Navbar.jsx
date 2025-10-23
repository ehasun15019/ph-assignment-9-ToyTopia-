import { RiMenu2Line } from "react-icons/ri";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css"

const navLink = (
  <>
    <NavLink to="/" className="me-3">
      Home
    </NavLink>

    <NavLink to="/" className="me-3">
      Blog
    </NavLink>

    <NavLink to="/" className="me-3">
      Contact
    </NavLink>

    <NavLink to="/auth/myProfile" className="me-3">
      My Profile
    </NavLink>
  </>
);

const Navbar = () => {
  const { user, signOutFunction } = use(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutFunction()
      .then(() => {
        alert("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar mt-10 px-3 md:px-8 lg:px-10">
      <div className="navbar-start">
        <Link to="/" className="ext-xl">
          <img src={assets.logo} alt="logo" className="w-30" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end ">
        <div className="relative pe-3 group">
          {user && (
            <>
              <Link to="/auth/myProfile">
                <img
                  src={user.photoURL}
                  alt="user image"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </Link>

              {/* Tooltip: bottom */}
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "No name"}
              </span>
            </>
          )}
        </div>

        {user ? (
          <button
            to="/auth/login"
            className="btn bg-[#0F83B2] text-white rounded-full px-6"
            onClick={handleSignOut}
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-[#0F83B2] text-white rounded-full px-6"
          >
            Login
          </Link>
        )}

        {/* mobile dropdown */}
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <RiMenu2Line />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
          >
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
