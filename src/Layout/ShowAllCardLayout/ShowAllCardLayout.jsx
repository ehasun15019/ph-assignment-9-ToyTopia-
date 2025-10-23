import React from "react";
import TopBar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const ShowAllCardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>

      <main className="flex-1">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ShowAllCardLayout;
