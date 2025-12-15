import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logoSidebar from "../../../assets/images/logo_sidebar.png"

export default function SideBar() {
    const [isCollapsed,setIsCollapsed]=useState(false);
    const toggleCollapse=()=>{
        setIsCollapsed(!isCollapsed);
    }
  return (
    <>
    <div className="sidebar-container">
        <Sidebar collapsed={isCollapsed}>
  <Menu>
    <div className="img  text-center py-4">
        <img  className='img-fluid' onClick={toggleCollapse} src={logoSidebar}/>
    </div>

    <MenuItem component={<Link to="/dashboard" />}  icon ={<i className='fa fa-home'></i>} > Home </MenuItem>
       <MenuItem component={<Link to="/dashboard/receipes" />}  icon ={<i className='fa fa-home'></i>}> Recipes </MenuItem>
          <MenuItem component={<Link to="/dashboard/categories" />}  icon ={<i className='fa fa-home'></i>}> Categories </MenuItem>
             <MenuItem component={<Link to="/dashboard/users" />} icon ={<i className="fa-solid fa-users"></i>}> Users </MenuItem>
                <MenuItem icon={<i className="fa-solid fa-lock"></i>}> Change Password </MenuItem>
                   <MenuItem icon ={<i className="fa-solid fa-arrow-right-from-bracket"></i>}> Logout </MenuItem>
  </Menu>
</Sidebar>;
    </div>

    </>
  )
}
