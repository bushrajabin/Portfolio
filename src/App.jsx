import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Errorpage from "./pages/Errorpage";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";
import Home from"./pages/Home"
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
