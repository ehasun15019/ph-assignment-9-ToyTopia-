import React from "react";
import TopBar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <header>
        <TopBar></TopBar>
        <Navbar></Navbar>
      </header>

      <main>
        <ContactForm></ContactForm>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Contact;
