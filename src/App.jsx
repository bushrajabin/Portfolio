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
import Nav from "./componenets/Nav/Nav";
import Links from "./componenets/Links/Links";
import ReNotes from "./componenets/Recomended/ReNotes";
import Errorpage from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Errorpage />,
  },
  {
    path: "/contact",
    element: <Contact />

  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
