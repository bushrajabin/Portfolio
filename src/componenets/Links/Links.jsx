import React from 'react'

import { FaHome } from "react-icons/fa";

function Links() {
    return (
        <div className='p-4 space-x-3 text-center justify-center items-center font-bold pt-2 text-purple-900 shadow-xl fixed top-14 w-full bg-white flex flex-row  cursor-pointer  xl:p-2  xl:text-1xl xl:text-purple-800 xl:shadow-xl xl:space-x-10 xl:font-bold  xl:fixed xl:w-full  xl:z-0 xl:flex xl:flex-row'>
            <FaHome className='xl:text-xl xl:flex xl:flex-row ' />
            <a href="https://www.w3schools.com/html/default.asp" target="_blank"  className='hover:underline'>HTML</a>
            <a href="https://www.w3schools.com/css/default.asp" target='_blank' className='hover:underline'>CSS</a>
            <a href="https://www.w3schools.com/js/default.asp"  target=" _blank"className=' hover:underline'>JAVASCRIPT</a>
            <a href="https://www.w3schools.com/react/default.asp" target='_blank' className=' hover:underline'>REACT JS</a>
            <a href="https://www.w3schools.com/c/index.php" target='_blank' className=' hover:underline'>C</a>



        </div>
    )
}

export default Links