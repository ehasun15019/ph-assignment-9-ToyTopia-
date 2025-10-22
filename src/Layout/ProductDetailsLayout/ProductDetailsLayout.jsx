import React from "react";
import TopBar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import ProductDetailsRightSide from "../../Components/ProductDetailsRightSide/ProductDetailsRightSide";

const ProductDetailsLayout = () => {
  return (
    <div>
      <header className="">
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-6 my-9">
        <section className="col-span-12 md:col-span-7">
          <Outlet />
        </section>

        <section className="col-span-12 md:col-span-5">
          <div className="flex justify-center md:justify-start">   
            <ProductDetailsRightSide />
          </div>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProductDetailsLayout;
