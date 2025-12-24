import React from 'react'
import logo from "../../../assets/images/logo.png"
import notfound from "../../../assets/images/notfound.png"

export default function NotFound() {

  return (
    <>
<div className='container'>
  <div className='not found d-flex justify-content-between  vh-100 '>
  <div className='d-flex flex-column '>

<di className="mt-3">
    <img src={logo} alt="img logo" className='w-75'/>
</di>

<div className=' d-flex  flex-grow-1 align-items-center'>
 <div>
   <h3>Oops </h3>
  <p className='text-green'>Page  not found </p>
  <p>This Page doesn’t exist or was removed!<br/>
We suggest you  back to home.</p>
<button className=' btn bg-green text-white px-3 my-3 w-50  d-flex align-items-center  '>   <i className='fa fa-arrow-left pe-4 '></i>Back to<br/> home </button>
 </div>
</div>
  </div>
  <div className='img-notfound   d-flex  justify-content-end align-items-end vh-100'>



    <img src={notfound} alt="notfound img" className='w-75'/>

  </div>
</div>
</div>
    </>
  )
}
