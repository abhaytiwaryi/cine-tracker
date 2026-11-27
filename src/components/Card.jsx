import React from 'react'
import { Plus } from 'lucide-react'

const Card = ({movie={}, onAdd }) => {
  return (
        <div className='h-[250px] w-[200px] rounded-2xl shrink-0 relative overflow-hidden'>
            <img className='h-full w-full rounded-2xl object-cover' 
                src={movie.poster}
                alt={movie.title} 
            />
            <div className='absolute bottom-0 inset-x-0 p-3 flex flex-col items-center bg-gradient-to-t from-gray-800'>
                <h1 className='text-3xl'>{movie.title}</h1>
                <span>{movie.year}</span>
                <button onClick={() => onAdd(movie)} className='flex border px-5 items-center rounded cursor-pointer'><Plus size={20}/>Watchlist</button>
            </div>
        </div>
            
  )
}

export default Card