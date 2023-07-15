import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'
import Feed from './Feed'
import './css/Asknitrr.css'

function Asknitrr() {
  return (
    <div className='Asknitrr'>
      <Navbar/>
      <div className='Asknitrr__contents'>
        <div className='Asknitrr__content'>
            <Sidebar/>
            <Feed/>
            <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Asknitrr
