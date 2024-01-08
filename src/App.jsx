import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./componenets/Bodypart/About";
import Contact from "./componenets/Contact/Contact";
import Errorpage from "./pages/Errorpage";
import Nav from "./componenets/Nav/Nav";
import Footer from "./componenets/Footer/Footer";
import Links from "./componenets/Links/Links";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "*",
    

    element: (
      <>
        <Nav />
        <Errorpage />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Nav />
        <Contact />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
  
    <RouterProvider router={router} />
    <Links/>
    <Footer/>
    </>
  );
};

export default App;
