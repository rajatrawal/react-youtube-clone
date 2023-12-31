import React from 'react'
import SideBar from './SideBar'
import Head from './Head'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
import { toggleMenu } from '../utils/store/slices/appSlice';
import { useDispatch } from 'react-redux'
const Body = () => {
  const dispatch = useDispatch();
  function menuTogglerHandel() {
    dispatch(toggleMenu());
  }
  return (
    <div>
      <Loader />
      <Head menuTogglerHandel={menuTogglerHandel}/>

      <div className='mt-20'>
        <SideBar menuTogglerHandel={menuTogglerHandel}/>
        <Outlet />
      </div>
    </div >

  )
}

export default Body