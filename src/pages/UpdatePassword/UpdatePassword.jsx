import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const UpdatePassword = () => {
  const { resetPasswordFunction } = use(AuthContext);

  /* reset password functionality start */
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Give the email in from");
      return;
    }

    resetPasswordFunction(email)
      .then(() => {
        toast.success("Check your email");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  /* reset password functionality end */

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Update your password
          </h2>
        </div>

        <form className="card-body shadow" onSubmit={handlePasswordReset}>
          <fieldset className="fieldset">
            {/* Email */}
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Reset Password
            </button>
          </fieldset>

          <Link to="/auth/login" className="text-blue-400 link link-hover text-center mt-3">Back to login</Link>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
