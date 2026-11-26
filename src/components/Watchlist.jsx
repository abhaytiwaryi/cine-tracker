import React from 'react'
import Card from './Card'

const Watchlist = () => {
  return (
    <div className='flex flex-col'>
        <div className='text-2xl'>
            <h1>My Watchlist (2)</h1>
        </div>
        <div className='py-5 flex gap-3 overflow-x-auto shrink-0 scrollbar-none'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Watchlist