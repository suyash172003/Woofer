import React from 'react'
import Playlists from './Playlists'
function Landing() {
  return (
    <div className='mb-10 flex justify-center items-center h-full w-full bg-gray-800'>
        <div className='rounded-md container w-1/2 h-2/3 bg-black'>
            <div src=""></div>
            <div className='border-t-2 bg-white'></div>
            <div className='bottom-part h-full w-full flex justify-center items-center'>
                <div className=''></div>
                <div className='w-10 h-10 border-1 rounded-full bg-gray-300'>
                    <button className='play'></button>
                </div>
            </div>
        </div>
        <Playlists/>
    </div>
  )
}

export default Landing