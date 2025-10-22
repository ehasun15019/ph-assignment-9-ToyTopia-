import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 px-4 sm:px-8 md:px-12 lg:px-25 xl:px-40 my-6">
      {/* Banner 1 */}
      <section
        className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full bg-no-repeat bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${assets.banner1})` }}
      ></section>

      {/* Banner 2 */}
      <section
        className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full bg-no-repeat bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${assets.banner2})` }}
      >
        <div className="absolute top-10 sm:top-14 md:top-20 right-6 sm:right-10 md:right-11">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary drop-shadow-lg mb-2"
            style={{
              WebkitTextStroke: "1px white",
              color: "#06b6d4",
            }}
          >
            Eco - Friendly Toys
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-4 text-gray-800 font-medium">
            Flash sale 30%, Extra discount <br /> for loyal customers
          </p>

          <Link className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-yellow-300 font-semibold hover:bg-yellow-400 transition">
            Shop now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
