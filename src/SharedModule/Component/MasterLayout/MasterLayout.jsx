import React from 'react'

import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import SideBar from '../SideBar/Sidebar'

export default function MasterLayout() {
  return (
    <div>
      <div className='d-flex vh-100 '>
        <div className=' '>
          {/* <Sidebar/> */}
          <SideBar/>
        </div>
        <div className='w-100  m-3'>
<NavBar/>
<Header/>
<Outlet/>
        </div>

      </div>
    </div>
  )
}
