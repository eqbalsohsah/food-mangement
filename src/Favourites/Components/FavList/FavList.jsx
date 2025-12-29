import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NoData from '../../../SharedModule/Component/NoData/NoData';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from '../../../SharedModule/Component/DeleteConfirmation/DeleteConfirmation';

export default function FavList() {
  ///////////////modal
   const [show, setShow] = useState(false);
   const [favId,setFavId]=useState(0);
    const [favName,setFavName]=useState('');

  const handleClose = () => setShow(false);
  const handleShow = (fav) =>{
setFavId(fav.id);
setFavName(fav.recipe.name)
       setShow(true);
  }

    const BASE_URL="https://upskilling-egypt.com:3006/";
  const[favList,setFavList]=useState();
  const getFavList= async()=>{
    try {
       let response= await axios.get('https://upskilling-egypt.com:3006/api/v1/userRecipe/',
         {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
         console.log(response);

         setFavList(response?.data?.data);

  }

     catch (error) {
      console.log(error);

    }

   }

   const removeFav=async ()=>{
   let response=await axios.delete(`https://upskilling-egypt.com:3006/api/v1/userRecipe/${favId}`,
             {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
             getFavList();
        toast.success('delete success');
        handleClose();




   }
   useEffect(()=>{
    getFavList();
   },[]);
  return (
    <>
    {/* ///////////modal */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <DeleteConfirmation deleteItem={"receipe "} name={favName} />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={removeFav}>
                   Delete
                 </Button>
        </Modal.Footer>
      </Modal>
      {/* ///////////////////end modal */}

    {favList?.length>0 ?
    <div className='container'>
      <div className='row '>
          {favList?.map((fav)=>(
        <div className='col-md-4 gy-3'>

          <div className='item border text-center rounded shadow' >
<img src={`${BASE_URL}${fav.recipe.imagePath}`}  className=' w-100'/>
            <h4>{fav?.recipe?.name} </h4>
            <h5>{fav?.recipe?.category[0]?.name}</h5>
            <p>{fav?.recipe?.description}</p>
            <i className='fa fa-heart mx-3 text-danger ' onClick={()=>handleShow(fav) }></i>
          </div>

        </div>
 ))}
      </div>

    </div>
    :<NoData/>}

    </>
  )
}
