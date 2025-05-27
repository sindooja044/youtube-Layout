import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home></Home>
      <Sidebar/>
    </div>
  )
}

export default App
