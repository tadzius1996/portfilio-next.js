import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
          <main>{children}</main>
        
    </div>
  )
}

export default layout