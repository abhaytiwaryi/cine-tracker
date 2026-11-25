import React from 'react'
import { Plus } from 'lucide-react'

const Card = () => {
  return (
        <div className='h-[250px] w-[200px] bg-gray-600 rounded-2xl shrink-0 relative overflow-hidden'>
            <img className='h-full w-full rounded-2xl object-cover' 
                src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
                alt="" 
            />
            <div className='absolute bottom-0 inset-x-0 p-3 flex flex-col items-center'>
                <h1 className='text-3xl'>Inception</h1>
                <span>(2019)</span>
                <button className='flex border px-5 items-center rounded cursor-pointer'><Plus size={20}/>Watchlist</button>
            </div>
        <div>
            
        </div>
    </div>
  )
}

export default Card