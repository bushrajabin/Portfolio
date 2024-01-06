import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <div className=' mt-48 xl:p-20'>
            <div className=' flex flex-col items-center ltext-center m-4 p-3 bg-gray-300 shadow-xl rounded-lg  xl:shadow-2xl xl:bg-gray-300 xl:text-center xl:items-center  xl:flex xl:flex-col xl:p-20 xl:w-5/6 xl:ml-28 xl:rounded-xl  xl: '>
                <div className='xl:w-96 xl:items-center xl:flex xl:flex-col'>
                    <h1 className=' font-bold text-3xl text-center p-3 underline xl:text-2xl xl:font-bold xl:p-3'>Contact With Me!</h1>
                    <img src="./images/MyImage.jpg" alt="" className=' w-64  h-64 rounded-full object-cover  xl:ml-0 xl:w-64 xl:h-64 xl:object-cover xl:rounded-full' />
                </div>
                <div className='flex flex-row  items-center xl:flex xl:flex-row xl:items-center xl:m-2 xl:w-56 xl:justify-center  xl:object-cover  xl:p-5 xl:gap-4 xl:text-3xl'>

                    <a href="https://github.com/bushrajabin" target='_blank' > <FaGithub /></a>
                    <a href="https://twitter.com/bushra_jabin" target='_blank'><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/bushra-jabin-72746424a/" target='_blank'><FaLinkedin /></a>
                    <a href="https://www.youtube.com/channel/UCevXFdbHBCiUxgF92UYe7VA" target='_blank'><FaYoutube /></a>

                </div>
            </div>
        </div>
    )
}

export default Contact