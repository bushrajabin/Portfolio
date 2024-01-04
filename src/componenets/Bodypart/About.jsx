import React from 'react'
function About() {
    return (
        <div className='   xl:flex xl:flex-row xl:cursor-pointer'>
            <div className='xl:max-w-4xl  xl:p-10'>
                <h1 className=' text-center underline font-serif text-xl pt-32 xl:text-4xl xl:font-serif xl:text-center xl:underline xl:tracking-wider xl:top-10'>Welcome to <span className=' text-purple-800'>CodeWithBushra</span></h1>
                <h2 className=' pl-4 pt-2 xl:text-2xl xl:pt-6 xl:font-bold'>Learn HTML</h2>
                <h3 className='pl-4 pt-2 text-xl font-bold text-purple-900 xl:text-2xl xl:text-purple-900 xl:pt-3'>WHO AM I?</h3>
                <p className='p-3 font-serif xl:text-xl xl:text-black xl:font-serif xl:tracking-wide xl:pt-2'>Hello, I'm Bushra, a 16-year-old with a passion for technology and programming. i am pursuing Diploma in Computer science &
                    engineering from Sister Nivedita University kolkata.  My programming journey has been marked by a proficiency in languages such as HTML, CSS, JavaScript, React JS, and C</p>
            </div>
            <div className="xl:p-1 xl:m-2 xl:mt-20">
                <img src="./images/GifImage.gif" alt="" className='xl:w-auto' />
            </div>
        </div>
    )
}

export default About