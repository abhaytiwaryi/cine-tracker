import React from 'react'
import Card from './Card'

const Watchlist = ({watchlist}) => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-2xl'>My Watchlist ({watchlist.length})</h1>
      <div className='flex overflow-x-auto gap-3 scrollbar-none shrink-0'>
        {watchlist.map((item) => (
          <Card key={item.id} movie={item} />
        ))}
      </div>
    </div>
  )
}

export default Watchlist