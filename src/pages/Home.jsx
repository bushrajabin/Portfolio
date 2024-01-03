import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../componenets/Nav/Nav'
import Links from '../componenets/Links/Links'
import About from '../componenets/Bodypart/About'
import Contact from '../contact/Contact'
import Errorpage from './Errorpage';
const Home = () => {
    return (
        <>

            <Nav />
            <Links />
            <About />
            <Contact />




        </>

    )
}

export default Home