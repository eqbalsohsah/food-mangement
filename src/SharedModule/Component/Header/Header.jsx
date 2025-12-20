import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'


export default function Header({title,description,imgUrl}) {

  return (
    <>

         <header className='bg-green  p-4 rounded-4'>
      <div className="container-fluid ">
        <div className="row ">
        <div className="col-md-8  text-white ">
          <div className='  h-100 d-flex flex-column justify-content-center '>
            <h4>{title}</h4>
            <p>{description} </p>
          </div>
        </div>
        <div className="col-md-4 ">
        <div className='h-100 text-end'>
            <img  className="w-50" src={imgUrl} />
        </div>
        </div>
      </div>
      </div>
      </header>

    </>
  )
}
