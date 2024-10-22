import React from 'react'
import Landing from './Landing'
import Playlists from './Playlists'
function Navbar() {
  return (
    <div className='w-full h-screen flex justify-between'>
      <div className="flex navbar w-48 h-full bg-black">
         <div className="p-10 flex flex-col h-full w-full gap-20">
            <div className='text-3xl font-bold text-pink-700'>Woofer</div>
            <div className='text-xl font-light h-full w-full flex flex-col items-center text-white space-y-10'>{["Home","Songs","Playlists","Settings","Login","Sign UP"].map((items,index)=>(<a href="#" key={items}>{items}</a>))}</div>
         </div>
        
      </div>
      <Playlists/>
    </div>
  )
}

export default Navbar