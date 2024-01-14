import React from 'react'
// import { Notes } from '../../common/Notes'
import { SlArrowRightCircle } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import Notes from "../../common/Notes.json"
console.log("notes",Notes)
const ReNotes = () => {
const navigate=useNavigate();
const getNotes=()=>{
    navigate("/error")
}
    return (
        <div >
            <h1 className='  text-center text-3xl underline font-serif p-5 xl:text-center  xl:text-4xl xl:font-bold xl:underline xl:font-serif'>Recomended Notes</h1>
            <div className=' flex flex-col  xl:flex xl:flex-row '>
                {
                    Notes.map((data, index, arr) => {
                        const { pdf, ques, About, button } = data;
                        return (
                            <div className=' shadow-xl rounded-lg bg-gray-300  m-2 p-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300 xl:transition xl:ease-in-out xl:delay-150  xl:hover:-translate-y-1 xl:hover:scale-110  xl:duration-300 xl:m-10  xl:p-6 xl:w-4/6 xl:shadow-md xl:rounded-sm  '>
                                <h2 className=' text-2xl font-bold text-purple-900 xl:text-3xl xl:text-purple-900 xl:font-bold'>{ques}</h2>
                                <p className=' text-xl font-serif pt-3  xl:text-xl xl:font-serif xl:pt-2'>{About}</p>
                                <button className=' flex flex-row bg-white text-xl font-serif text-purple-900 p-2 mt-4 shadow-2xl rounded-md  xl:text-xl xl:bg-white xl:p-2 xl:mt-3 xl:font-bold xl:flex xl:flex-row xl:text-purple-900' onClick={getNotes}>{button}<SlArrowRightCircle className='text-xl mt-1 pl-1  xl:flex xl:flex-row xl:pt-2 ' /></button>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ReNotes