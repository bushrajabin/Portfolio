import React from 'react'
import { socialData } from "../common/social"

function Contact() {
    return (
        <div className='xl:p-5'>
            <div className=' xl:shadow-2xl xl:bg-gray-300 xl:text-center xl:items-center  xl:flex xl:flex-col xl:p-20 xl:w-5/6 xl:ml-28 xl:rounded-xl  xl: '>
                <div className='xl:w-96 xl:items-center xl:flex xl:flex-col'>
                    <h1 className='xl:text-2xl xl:font-bold xl:p-3'>Contact With me!</h1>
                    <img src="./images/MyImage.jpg" alt="" className='xl:w-36 xl:h-36 xl:object-cover  xl:rounded-full' />
                </div>
                <div className='flx flex-row xl:flex xl:flex-row xl:items-center xl:m-2 xl:w-56 xl:justify-center  xl:object-cover  xl:p-5 xl:gap-4'>
                    {
                        socialData.map((data, index, arr) => {
                            const { Image, links } = data;
                            return (
                                <div>
                                    <a href={links} target="_blank"><img src={Image} alt="" className=" xl:w-10 xl:h-10 xl:object-cover  xl:rounded-full " /></a>

                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Contact