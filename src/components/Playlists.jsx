import React from 'react'
function Playlists() {
  return (
    
    <div className='p-10 w-full h-full cards flex flex-col'>
        <div className='p-10 first w-full h-1/2 flex flex-row gap-36'>
            <div className='w-full h-full flex flex-col'>
                <div className='rounded-full container w-44 h-44'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/005/416/large_2x/colorful-music-notes-background-with-sheet-music-disc-and-treble-clef-illustration-ai-generative-free-photo.jpg" className='h-full w-full rounded-full'></img>
                </div>
                <h1 className='mt-2 ml-6 text-lime-50'>Bollywood Songs</h1>        
            </div>
            <div className='w-full h-full flex flex-col'>
                <div className='rounded-full container w-44 h-44'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/005/416/large_2x/colorful-music-notes-background-with-sheet-music-disc-and-treble-clef-illustration-ai-generative-free-photo.jpg" className='h-full w-full rounded-full'></img>
                </div>
                <h1 className='mt-2 ml-6 text-lime-50'>Hollywood Songs</h1>        
            </div>
            <div className='w-full h-full flex flex-col'>
                <div className='rounded-full container w-44 h-44'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/005/416/large_2x/colorful-music-notes-background-with-sheet-music-disc-and-treble-clef-illustration-ai-generative-free-photo.jpg" className='h-full w-full rounded-full'></img>
                </div>
                <h1 className='mt-2 ml-6 text-lime-50'>Bhojpuri Songs</h1>      
            </div>
            <div className='w-full h-full flex flex-col'>
                <div className='rounded-full container w-44 h-44'>
                    <img src="https://static.vecteezy.com/system/resources/previews/022/005/416/large_2x/colorful-music-notes-background-with-sheet-music-disc-and-treble-clef-illustration-ai-generative-free-photo.jpg" className='h-full w-full rounded-full'></img>
                </div>
                <h1 className='mt-2 ml-6 text-lime-50'>Punjabi Songs</h1>        
            </div>
        </div>
        <div className='p-10 first w-full h-1/2 flex flex-row gap-36 rounded-full'>
            <div className='rounded-full container w-44 h-44 bg-black'></div>
            <div className='rounded-full container w-44 h-44 bg-black'></div>
            <div className='rounded-full container w-44 h-44 bg-black'></div>
            <div className='rounded-full container w-44 h-44 bg-black'></div>
        </div>
        
    </div>
  )
}

export default Playlists