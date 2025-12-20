import React, { useState } from 'react'

import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import SideBar from '../SideBar/Sidebar'


export default function MasterLayout() {
    const [isCollapsed,setIsCollapsed]=useState(false);
  return (
    <div>
      <div className='  d-flex  '>
        <div className=' '>
          {/* <Sidebar/> */}
          <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        </div>
        <div className={`content ${isCollapsed?" collapsed":""}`}>
<NavBar/>

<Outlet/>
        </div>

      </div>
    </div>
  )
}
