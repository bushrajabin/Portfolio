import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from './pages/Errorpage';


const App = () => {
  return (
    <>

      <Home />
      <BrowserRouter>
        <Routes>
          {/* <Route path='*' element={<Errorpage />} /> */}


        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App