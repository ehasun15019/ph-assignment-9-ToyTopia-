import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const TryNow = () => {
  const { user } = use(AuthContext);

  const [formData, setFromData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
  });

  const handleTry = (e) => {
    e.preventDefault();
    toast.success("You have successfully requested to try this toy!");

  };

  return (
    <div>
      <form className="flex flex-col space-y-2 bg-white p-5 shadow-2xl w-[400px]" onSubmit={handleTry}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-md border"
          value={formData.name}
          onChange={(e) => {
            return setFromData({
              ...formData,
              name: e.target.value,
            });
          }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-md border"
          value={formData.email}
          onChange={(e) => {
            return setFromData({
              ...formData,
              email: e.target.value,
            });
          }}
          required
        />

        <button
          type="submit"
          className="bg-[#0F83B2] hover:bg-[#0f84b2df] text-white font-semibold py-2 rounded-md transition-all duration-300 cursor-pointer"
        >
          Try Now
        </button>
      </form>
    </div>
  );
};

export default TryNow;
