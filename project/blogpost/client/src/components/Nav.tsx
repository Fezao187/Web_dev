import React, { useState } from 'react'
import Button from './Button';

const Nav = () => {
    let [open, setOpen] = useState<boolean>(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
                text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
                        <h1>Some icon</h1>
                    </span>
                    Blogpost
                </div>
                <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <h1 onClick={() => setOpen(!open)}>{open ? 'close' : 'menu'}</h1>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
                    ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Home</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/createBlog" className='text-gray-800 hover:text-gray-400 duration-500'>Create Blog</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/myBlogs" className='text-gray-800 hover:text-gray-400 duration-500'>My Blogs</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/signup" className='text-gray-800 hover:text-gray-400 duration-500'>Sign Up</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/login" className='text-gray-800 hover:text-gray-400 duration-500'>Login</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a href="/signout" className='text-gray-800 hover:text-gray-400 duration-500'>Sign Out</a></li>
                    <Button></Button>
                </ul>
            </div>
        </div>
    );
}

export default Nav;