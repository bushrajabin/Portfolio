import React from "react";
import Nav from "../componenets/Nav/Nav";
import Links from "../componenets/Links/Links";
import About from "../componenets/Bodypart/About";
import Footer from "../componenets/Footer/Footer";
import Contact from "../componenets/Contact/Contact";
import ReNotes from "../componenets/Recomended/ReNotes";

const Home = () => {
  return (
    <>
      <Nav />
      <Links />
      <About />
      <ReNotes />
      <Footer />
    </>
  );
};

export default Home;
