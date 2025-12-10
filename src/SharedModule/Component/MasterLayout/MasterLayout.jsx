import React from 'react'

import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../SideBar/Sidebar'

export default function MasterLayout() {
  return (
    <div>
      <div className='d-flex'>
        <div className=''>
          <Sidebar/>
        </div>
        <div className='w-100'>
<NavBar/>
<Outlet/>
        </div>

      </div>
    </div>
  )
}
