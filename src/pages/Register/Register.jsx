import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { IoEye } from "react-icons/io5";
import { ImEyeBlocked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const RegexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]).{6,}$/;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (name.length <= 5) {
      setNameError("Please give the name minimum 6 characters");
      return;
    } else {
      setNameError("");
    }

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!RegexPassword.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters and include at least one lowercase letter, one uppercase letter and one special character."
      );
      return;
    } else {
      setPasswordError("");
    }

   createUser(email, password)
  .then((newUser) => {
    const user = newUser.user;
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => console.log(error));

    e.target.reset();
    toast.success("You are successfully registered");
  })
  .catch((error) => {
    toast.error(error.massage)
  });
  };

  /* Sign in with Google */
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(provider)
      .then((newUser) => {
        console.log(newUser.user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Register your account
          </h2>
        </div>

        <form className="card-body" onSubmit={handleOnSubmit}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name"
              name="name"
              required
            />

            {nameError && <p className="text-red-500">{nameError}</p>}

            {/* Photo Url */}
            <label className="label mt-2">Photo Url</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo url"
              name="photo"
              required
            />

            {/* Email */}
            <label className="label mt-2">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
              required
            />

            {/* Password */}
            <label className="label mt-2">Password</label>
            <div className="border border-gray-600 mb-4 rounded flex items-center justify-between ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="a!962822##"
                className="input focus:outline-none bg-transparent border-0 w-full py-3"
                required
              />
              <div
                className="cursor-pointer pe-3 text-xl"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <IoEye /> : <ImEyeBlocked />}
              </div>
            </div>

            {passwordError && (
              <p className="text-red-500 text-sm mb-2">{passwordError}</p>
            )}

            <div className="text-center pt-3">
              <p>
                Have An Account ? please{" "}
                <Link className="text-red-500" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>

        {/* google sign in */}
        <button
          type="button"
          className="btn mt-1 text-black bg-white border border-[#e5e5e5] w-full hover:bg-gray-200 flex items-center justify-center gap-2"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={20} /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
