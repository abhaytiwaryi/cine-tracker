import React from 'react'
import Card from './Card'
import Watchlist from './Watchlist'

const Content = () => {
  return (
    <div className='gap-5 p-5 flex flex-col'>
        <div>
            <h1 className='text-2xl'>Search Results</h1>
        </div>
        <div className='flex gap-3 overflow-x-auto scrollbar-none'>
            <Card />
            <Card />
            <Card />
        </div>
        <div>
            <Watchlist />
        </div>
    </div>
  )
}

export default Content