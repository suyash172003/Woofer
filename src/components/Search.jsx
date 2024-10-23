import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function Search() {
  return (
    <div className='w-full h-full'>
        <div className="p-5 w-full h-full flex flex-row gap-4">
            <div className='border-2 h-1/4 w-3/4 rounded-2xl flex justify-between items-center'>
                <span className='p-4 font-light'>Search for music, albums, artists.</span>
                <AiOutlineSearch className='mr-3'></AiOutlineSearch>
            </div>
            <div className='container w-1/5 h-1/4 flex flex-row gap-2'>
                <button className='w-full h-full rounded-xl bg-slate-50'>
                    <h1 className='text-black'>Login</h1>
                </button>
                <button className='w-full h-full rounded-xl bg-cyan-500'>
                    <h1 className='text-white'>Sign UP</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search