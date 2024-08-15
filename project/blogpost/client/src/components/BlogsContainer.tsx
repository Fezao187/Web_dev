import React from 'react'

type Props = {}

const BlogsContainer = (props: Props) => {
  return (
    <>
      <div className='bg-white m-auto w-[300px] h-[350px] sm:w-[500px] sm:h-[400px] border-black outline md:w-[768px] md:h-[500px]'>
        <div className='outline w-[760px] h-[494px] m-auto'>
          <div className='flex justify-between outline h-[50px]'>
            <img className='h-[50px] w-[50px] outline rounded-full' alt='Profile pic' />
            <div className='my-auto w-[700px] outline'>Name</div>
          </div>
          <div className='h-[55px] outline flex'>
            <h1 className='my-auto outline'>Titlfrfrfrrfrfrfrfrfrfrfrfrfrrfrfrfrre</h1>
          </div>
          <div>Blogs</div>
        </div>
      </div>
    </>
  )
}

export default BlogsContainer;