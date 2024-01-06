import React from 'react'
	

const Nav = () => {
<link


/>

    return (
        <div className='  flex flex-row  justify-between p-5 cursor-pointer fixed w-full bg-white  xl:flex xl:flex-row xl:justify-between xl:p-5 xl:text-center xl:items-center xl:cursor-pointer xl:fixed  xl:w-full xl:z-0 xl:bg-white  '>
            <div className=" text-xl font-serif xl:text-2xl xl:font-serif xl:text-center ">
                <h3>Bushra jabin</h3>
            </div>

            <div className=" font-bold space-x-6 xl:text-1xl xl:font-bold xl:space-x-12 ">
                <a href="/about">About</a>
                <a href="">Notes</a>
                <a href="" >Contact</a>
            </div>
        </div>
    )
}

export default Nav;