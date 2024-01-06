import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className=' bg-white  flex flex-col justify-between  xl:flex xl:flex-row xl:justify-between xl:p-1 xl:items-center '>
            <div className=' flex flex-row pt-2 xl:flex xl:flex-row xl:items-center xl:p-3'>
                <img src="./images/MyImage.jpg" alt="" className=' w-10 h-10 p-1 object-cover rounded-full xl:w-10 xl:h-10 xl:object-cover xl:rounded-full' />
                <h2 className=' text-sm m-2 font-serif  flex flex-row xl:text-xl xl:pl-3 xl:font-serif'>BushraJabin | Copyright©2024 BushraJabin.com    </h2>

            </div>

            <div className=' flex flex-row items-center justify-end m-2 xl:flex xl:flex-row xl:m-2 xl:p-5 xl:space-x-2'>
               <a href="https://github.com/bushrajabin" target='_blank' > <FaGithub /></a>
                <a href="https://twitter.com/bushra_jabin" target='_blank'><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/bushra-jabin-72746424a/" target='_blank'><FaLinkedin /></a>
                <a href="https://www.youtube.com/channel/UCevXFdbHBCiUxgF92UYe7VA" target='_blank'><FaYoutube /></a>

            </div>


        </div>
    )
}

export default Footer