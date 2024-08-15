import React from 'react'
import BlogsContainer from '../components/BlogsContainer'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <div className='pt-[90px] bg-indigo-600 w-full h-screen'>
                <BlogsContainer />
            </div>
        </>
    )
}

export default Home