import React from 'react'
import { socialData } from '../../common/social'
function Footer() {
    return (
        <div className=' bg-white  flex flex-col justify-between  xl:flex xl:flex-row xl:justify-between xl:p-1 xl:items-center '>
            <div className=' flex flex-row pt-2 xl:flex xl:flex-row xl:items-center xl:p-3'>
                <img src="./images/MyImage.jpg" alt="" className=' w-10 h-10 p-1 object-cover rounded-full xl:w-10 xl:h-10 xl:object-cover xl:rounded-full' />
                <h2 className=' text-sm m-2 font-serif  flex flex-row xl:text-xl xl:pl-3 xl:font-serif'>BushraJabin | Copyright©2024 BushraJabin.com    </h2>
             
            </div>

            <div className=' flex flex-row items-center justify-end m-2 xl:flex xl:flex-row xl:m-2 xl:p-5'>
                {
                    socialData.map((data, index, arr) => {
                        const { Image,links } = data;
                        return (
                            <div>
                                <a href={links} target="_blank"> <img src={Image} alt="" className=' w-5  h-5  object-cover xl:w-5 xl:h-5 xl:object-cover' /></a> 
                            </div>
                        )

                    })
                }
            </div>


        </div>
    )
}

export default Footer