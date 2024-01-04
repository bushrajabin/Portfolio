import React from 'react'
import { Notes } from '../../common/Notes'

function Recomended() {
    return (
        <div >
            <h1 className='  text-center text-3xl underline font-serif p-5 xl:text-center xl:text-4xl xl:font-bold xl:underline xl:font-serif'>Recomended Notes</h1>
            <div className=' flex flex-col  xl:flex xl:flex-row '>
                {
                    Notes.map((data, index, arr) => {
                        const { Image, ques, About, button } = data;
                        return (
                            <div className=' shadow-xl rounded-lg bg-gray-300  m-2 p-3  xl:m-10  xl:p-6 xl:w-4/6 xl:shadow-md xl:rounded-sm  '>
                                {/* <img src={Image} alt="s" className='xl:w-40 xl:h-40' /> */}
                                <h2 className=' text-2xl font-bold text-purple-900 xl:text-3xl xl:text-purple-900 xl:font-bold'>{ques}</h2>
                                <p className=' text-xl font-serif pt-3  xl:text-xl xl:font-serif xl:pt-2'>{About}</p>
                                <button className=' bg-white text-xl font-serif text-purple-900 p-2 mt-4 shadow-2xl rounded-md  xl:text-2xl xl:bg-white xl:p-2 xl:mt-3 xl:font-bold xl:text-purple-900'>{button}</button>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Recomended