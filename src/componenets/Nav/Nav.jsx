import React from 'react'

const Nav = () => {
    return (
        <div className='  xl:flex xl: flex-row xl:justify-between xl:p-5 xl:text-center xl:items-center xl:cursor-pointer  '>
            <div className="xl:text-2xl xl:font-serif xl:text-center ">
                <h3>Bushra jabin</h3>
            </div>

            <div className="xl:text-1xl xl:font-thin xl:space-x-12 ">
                <a href="">About</a>
                <a href="">Notes</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Nav;