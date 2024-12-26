import React from 'react'
import MyNavbar from './MyNavbar'
import MySidebar from './MySidebar'
import MyFooter from './MyFooter'
import { Outlet } from 'react-router-dom'

function MyLayout() {
  return (
    <div>
      <MyNavbar/>
      <div className='grid grid-cols-[256px_1fr]'>
        <MySidebar/>
        <div>
          <Outlet/>
        </div>
      </div>
      <MyFooter/>
    </div>
  )
}

export default MyLayout
