import { GoogleAuthProvider } from "firebase/auth";
import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import { IoEye } from "react-icons/io5";
import { ImEyeBlocked } from "react-icons/im";

const Login = () => {
  const { signInWithGoogle, loginFunction } = use(AuthContext);
  const [errorHandling, setErrorHandling] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  /* login with email and password functionality start */
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginFunction(email, password)
      .then((getUser) => {
        const users = getUser.user;
        toast.success("Login successfully");
      })
      .catch((error) => {
        const errors = error.message;
        setErrorHandling(errors);
        toast.error(error.message);
      });
  };
  /* login with email and password functionality end */

  /* Sign in with Google */
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(provider)
      .then((newUser) => {
        toast.success("Login successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <div className="flex justify-center min-h-screen items-center my-6">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Login your account
          </h2>
        </div>

        <form className="card-body" onSubmit={handleLogin}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
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

            {errorHandling && <p className="text-red-600">{errorHandling}</p>}

            <div className="mt-2">
              <Link to="/auth/updatePassword" className="link link-hover text-blue-400">Forgot password?</Link>
            </div>

            <div className="text-center pt-3">
              <p>
                Don't Have An Account ?{" "}
                <Link className="text-red-500" to="/auth/register">
                  Register
                </Link>
              </p>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>

          <button
            type="button"
            className="btn mt-1 text-black bg-white border border-[#e5e5e5] w-full hover:bg-gray-200 flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={20} /> Login in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
