import React from 'react'

const Nav = () => {
    return (
        <div className='bg-yellow-800 text-red-500 text-2xl flex flex-row  justify-between'>
            <div className='bg-red-900'>
                <h3>Bushra jabin</h3>
            </div>

            <div>
                <a href="">About</a>
                <a href="">Notes</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Nav;