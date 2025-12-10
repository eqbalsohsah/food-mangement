import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
      <div className='auth-container '>
        <div className="container-fluid bg-overlay">
          <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-lg-5 col-md-7 bg-white p-3  rounded-3'>
        <Outlet/>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
