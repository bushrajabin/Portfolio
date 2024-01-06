import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../componenets/Nav/Nav'
import Links from '../componenets/Links/Links'
import About from '../componenets/Bodypart/About'
import Recomended from '../componenets/Recomended/Recomended';
import Footer from '../componenets/Footer/Footer';
import Contact from '../componenets/contact/Contact'

const Home = () => {
    return (
        <>

            <Nav />
            <Links />
            <About />
            <Recomended/>
         <Footer/> 
            {/* <Contact /> */}




        </>

    )
}

export default Home