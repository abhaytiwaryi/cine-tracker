import React from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-blue-300 text-white'>
      <NavBar />
      <Content />
    </div>
  )
}

export default App