import React, { useContext } from 'react'
import Header from '../../../SharedModule/Component/Header/Header'
import headerImg from "../../../assets/images/header.png"

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext';

export default function DashBoard() {
    let{loginData}=useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <div>
    <Header title={`Welcome ${loginData?.userName}`} description={"This is a welcoming screen for the entry of the application , you can now see the options"}  imgUrl={headerImg}/>
   <div className="bg-color my-3  d-flex justify-content-between align-items-center p-3">
    <div className="caption">
      <h4>Fill the<spn className="text-green"> Recipes</spn>  !</h4>
      <p>Fill the Recipes !</p>
    </div>
    <button className='  btn  bg-green text-white ' onClick={()=>navigate("/dashboard/receipes")}>Fill Recipes <i className='fa fa-arrow-right'></i></button>
   </div>
    </div>
  )
}
