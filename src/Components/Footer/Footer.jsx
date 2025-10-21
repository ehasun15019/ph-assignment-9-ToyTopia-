import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";

const Footer = () => {
  return (
   <footer style={{ backgroundImage: `url(${assets.footer})` }} className="flex flex-col md:flex-row gap-9 h-[550px] py-5 md:py-0 items-center w-full">
    <section className="ps-0 md:ps-20">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-40 mb-2" />
      </Link>

      <p>Nunc consequat interdum varius <br /> sit amet mattis. </p>

      <div className="social-icon flex gap-4 mt-3">
        <Link to="/">
          <img src={assets.s1} alt="" className="w-8" />
        </Link>      

        <Link to="/">
        <img src={assets.s2} alt="" className="w-8" />
        </Link>

        <Link to="/">
        <img src={assets.s3} alt="" className="w-8" />
        </Link>

        <Link to="/">
        <img src={assets.s4} alt="" className="w-8" />
        </Link>
      </div>
    </section>

    <section>
      <h4 className="text-[1.2rem] pb-3">My account</h4>

      <ul>
        <li><Link to="/">Track my order</Link></li>
        <li><Link to="/">Terms of use</Link></li>
        <li><Link to="/">Wishlist</Link></li>
        <li><Link to="/">Submit Your feedback</Link></li>
      </ul>
    </section>

    <section>
      <h4 className="text-[1.2rem] pb-3">Customer service</h4>

      <ul>
        <li><Link to="/">Monday to Friday</Link></li>
        <li><Link to="/">10am - 6pm( NewYork time)</Link></li>
        <li>Call us: <span className="text-blue-500">123-456-7868</span></li>
        <li>Email us: <span className="text-blue-500">info@example.com</span></li>
      </ul>
    </section>
   </footer>
  );
};

export default Footer;
