// import React, { useContext } from 'react'
// import { AuthContext } from '../../../Context/AuthContext'






// export default function NavBar() {
// const{loginData}=useContext(AuthContext);
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary my-2">
//   <div className="container-fluid">

//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto ">
//         <li className="nav-item">
//      {loginData?.userName}
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </>
//   )
// }
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import img from "../../../assets/images/profile.png"
import { Dropdown } from 'bootstrap';

export default function NavBar() {
  const { loginData } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // حالة الفتح والإغلاق

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false); // لو عايزة تغلقي لما تضغطي على أي لينك

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleNavbar} // هنا بنفتح ونقفل
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent   ">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item" onClick={closeNavbar}>
              {loginData?.userName}
            </li>
             <li className="nav-item" onClick={closeNavbar}>
           <img src={img} alt="profile" className='profile'/>
            </li>
            {/* لو عندك لينكات تانية، كل لينك ممكن تضيف له onClick={closeNavbar} */}
          </ul>
        </div>


      </div>
    </nav>
  )
}
