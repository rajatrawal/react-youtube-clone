import React from 'react'
import SideBar from './SideBar'
import Head from './Head'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
const Body = () => {
  return (
    <div>
      <Loader />
      <Head />

      <div className='mt-20'>
        <SideBar />
        <Outlet />
      </div>
    </div >

  )
}

export default Body