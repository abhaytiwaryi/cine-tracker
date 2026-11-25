import React from 'react'
import {Clapperboard, Search} from 'lucide-react'

const NavBar = () => {
  return (
    <div className='w-screen py-4 px-5 gap-3 bg-black text-white flex flex-col md:flex-row items-center justify-between'>
        <div className='flex gap-2 text-3xl'>
            <Clapperboard size={40}/>
            <h1>CINE-TRACKER</h1>
        </div>

        <div className='flex border-gray-400 border rounded p-2 gap-2'>
            <input className='outline-none' type="text" placeholder='Search for a Movie...'/>
            <button className='cursor-pointer'><Search /></button>
        </div>
    </div>
  )
}

export default NavBar