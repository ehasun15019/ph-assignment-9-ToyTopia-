import React from "react";
import { assets } from "../../assets/assets";

const Delivery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-6 px-4">
      {/* Card 1 */}
      <section className="w-full sm:w-[280px] md:w-[300px]">
        <div className="bg-[#e6f2fd] px-7 py-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={assets.watch} alt="Customer care" className="w-10 mb-2" />
          <h5 className="text-[#12AEE0] font-semibold text-lg">
            Customer Care
          </h5>
          <p className="text-black text-sm">24-hour follow up</p>
        </div>
      </section>

      {/* Card 2 */}
      <section className="w-full sm:w-[280px] md:w-[300px]">
        <div className="bg-[#fef0e0] px-7 py-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={assets.truck} alt="Free shipping" className="w-10 mb-2" />
          <h5 className="text-[#E87B16] font-semibold text-lg">
            Free Shipping
          </h5>
          <p className="text-black text-sm">Free for $150 and up</p>
        </div>
      </section>

      {/* Card 3 */}
      <section className="w-full sm:w-[280px] md:w-[300px]">
        <div className="bg-[#e2fde5] px-7 py-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src={assets.returns} alt="Return" className="w-10 mb-2" />
          <h5 className="text-[#06C825] font-semibold text-lg">Return</h5>
          <p className="text-black text-sm">Within 7 Days</p>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
