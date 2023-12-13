import React from 'react'
import SideBar from './SideBar'
import Head from './Head'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div>
      <Head />

      <div className='mt-20'>
        <SideBar />
        <Outlet />
      </div>
    </div >

  )
}

export default Body