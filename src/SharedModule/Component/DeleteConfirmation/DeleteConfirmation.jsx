import React from 'react'
import confirmImg from "../../../assets/images/nodata.png"

export default function DeleteConfirmation({deleteItem,name}) {
  return (
    <>
    <div className='text-center p-3'>
      <img src={confirmImg} className="w-25 h-25"/>
         <h3 className='my-2'>Delete This {deleteItem}{name} ?</h3>
          <p>are you sure you want to delete this  ? if you are sure just click on delete it</p>
    </div>

    </>
  )
}
