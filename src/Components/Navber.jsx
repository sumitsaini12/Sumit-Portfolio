import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClear } from "react-icons/md";
import { Link, animateScroll as scroll } from 'react-scroll'

function Navber() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className=' flex justify-between items-center w-full h-full md:px-8 px-3'>
                <div className="flex items-center space-x-4">
                    {/* <img
                        class="w-12 h-12 hidden md:flex"
                        src="https://media.discordapp.net/attachments/937339895591079957/1004612274356486216/20220802_235829_229.png?width=423&height=422"
                        alt="logo"
                    /> */}

                    <h1 class="text-purple-500 cursor-pointer font-medium text-4xl  mr-96 sm:mr-16 ">
                    <Link to="home" smooth={true}  duration={500}>Sumit | Portfolio</Link>
                        
                    </h1>
                </div>

                <ul className='hidden md:flex justify-center items-center'>
                    <li className="px-5 relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr hover:from-purple-400 hover:to-purple-600 transition-all ease-in-out duration-100 cursor-pointer"><Link to="home" smooth={true}  duration={500}>Home</Link></li>
                    <li className="px-5 relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr hover:from-purple-400 hover:to-purple-600 transition-all ease-in-out duration-100cursor-pointer"><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className="px-5 relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr hover:from-purple-400 hover:to-purple-600 transition-all ease-in-out duration-100  cursor-pointer"><Link to="skills" smooth={true} offset={-50} duration={500}>Skills</Link></li>
                    <li className="px-5 relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr hover:from-purple-400 hover:to-purple-600 transition-all ease-in-out duration-100  cursor-pointer"><Link to="Projects" smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li className="text-purple-500 p-4 font-bold font-mono animate-bounce">Call +91 9548842182</li>
                </ul>


                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <FiMenu className='w-6 h-6' /> : <MdClear className='w-6 h-6' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : ' md:hidden flex-col absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="skills" smooth={true} offset={-50} duration={500}>Skills</Link></li>
                <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="Projects" smooth={true} offset={-100} duration={500}>Project</Link></li>

            </ul>

        </div>
    );
}

export default Navber





