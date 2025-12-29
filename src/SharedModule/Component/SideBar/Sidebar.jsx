import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import logoSidebar from "../../../assets/images/logo_sidebar.png"
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

export default function SideBar({isCollapsed,setIsCollapsed}) {
    // const [isCollapsed,setIsCollapsed]=useState(false);
    let{loginData}=useContext(AuthContext);
    const{logOut}=useContext(AuthContext);

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
       {loginData?.userGroup =="SystemUser"? <MenuItem component={<Link to="/dashboard/favs" />}  icon ={<i className='fa fa-heart'></i>}> Favourites </MenuItem>:""}

       {loginData?.userGroup !="SystemUser"? <MenuItem component={<Link to="/dashboard/categories" />}  icon ={<i className='fa fa-home'></i>}> Categories </MenuItem>:""}

          {loginData?.userGroup !="SystemUser"?  <MenuItem component={<Link to="/dashboard/users" />} icon ={<i className="fa-solid fa-users"></i>}> Users </MenuItem>:""}

                <MenuItem   component={<Link to="/dashboard/change-pass" />}   icon={<i className="fa-solid fa-lock"></i>}> Change Password </MenuItem>
                   <MenuItem onClick={logOut}  component={<Link to="/" />}  icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>}> Logout </MenuItem>
  </Menu>
</Sidebar>;
    </div>

    </>
  )
}
