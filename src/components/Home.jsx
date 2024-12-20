import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Landing from './Landing'

function Home() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <div className='w-1/6 h-screen'>
          <Navbar/>
        </div>
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-1/3'>
                <Search/>
            </div>
            <div className='w-full h-full'>
                <Landing/>
            </div>
        </div>
    </div>
  )
}

export default Home
