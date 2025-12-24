import React, { useEffect, useState } from 'react'
import Header from '../../../SharedModule/Component/Header/Header'
import header2 from "../../../assets/images/header2.png"
import axios from 'axios'
import NoData from '../../../SharedModule/Component/NoData/NoData';
import MenuAction from '../../../SharedModule/Component/MenuAction/MenuAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from '../../../SharedModule/Component/DeleteConfirmation/DeleteConfirmation'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function RecipesList() {
  const BASE_URL="https://upskilling-egypt.com:3006/";
  const navigate=useNavigate();
  const[receipesList,setReceipesList]=useState([]);
  const[receipeId,setReceipeId]=useState(0);
     const[receipeName,setReceipeName]=useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (receipe) =>
     {
      setReceipeId(receipe.id);
      setReceipeName(receipe.name);
       setShow(true);
     }




    const getAllReceipes= async()=>{

      try {
         const response= await axios.get('https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1',
          {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
        setReceipesList(response.data.data);
           console.log(response.data.data);

      } catch (error) {
        console.log(error);

      }

  }
  const deleteReceipe=async()=>{
try {
  let response=await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Recipe/${receipeId}`,
  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
  )
     toast.success("delete Success");
handleClose();
  getAllReceipes();

} catch (error) {
  console.log(error);

}

  }
  useEffect(()=>{
    getAllReceipes();
  },[])
  return (
    <>
    <Header title={"Recipe Itmes!"}  description={"You can now add your items that any user can order it from the Application and you can edit"} imgUrl={header2} />
<div className="new_item d-flex justify-content-between align-items-center my-2 bg-color p-3">
  <div>
    <h6>Recipe Table Details</h6>
    <p>You can check all details</p>
  </div>
  <button className=' btn bg-green text-white' onClick={()=>navigate('/dashboard/recipe-data')}>Add New Item</button>
</div>
 <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<DeleteConfirmation deleteItem={"receipe "} name={receipeName}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={deleteReceipe}>
            Delete
          </Button>

        </Modal.Footer>
      </Modal>
<div className='search my-3'>
<div class="row">
  <div className="col-md-8">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"/>
</div>
  </div>
  <div className="col-md-2">
<select class="form-select" aria-label="Default select example">
  <option selected>Tag</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
   <div className="col-md-2">
<select class="form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
</div>
</div>
{receipesList.length>0?
       <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Receipe Name </th>
       <th scope="col"> image </th>
         <th scope="col">price </th>
      <th scope="col">Description</th>
       <th scope="col">Tag</th>
        <th scope="col">Category</th>
        <th scope="col">action</th>


    </tr>
  </thead>
  <tbody>
{ receipesList.map((receipe)=>(
    <tr>
      <th scope="row">{receipe.id}</th>
      <td>{receipe.name}</td>
   <td><img src={`${BASE_URL}${receipe.imagePath}`}  className=' imgsize'/></td>
         <td>{receipe.price}</td>
      <td>{receipe.description}</td>
       <td>{receipe.tag.id}</td>
         <td>{receipe.tag.name}</td>
         <td>
              <div className="dropdown">
      <span
        data-bs-toggle="dropdown"
        style={{ cursor: "pointer", fontSize: "20px" }}
      >
       <i class="fa-solid fa-ellipsis"></i>
      </span>

      <ul className="dropdown-menu ">
        <li className="dropdown-item"> <i class="fa-regular fa-eye text-green "></i>View</li>
        <li className="dropdown-item" onClick={()=>navigate(`/dashboard/recipe-data/${receipe.id}`)}> <i class="fa-solid fa-pen-to-square text-green"></i>Edit</li>
        <li className="dropdown-item " onClick={()=>handleShow(receipe)}><i class="fa-solid fa-trash text-green"></i>Delete</li>
      </ul>
    </div>
         </td>




    </tr>
)) }

     </tbody>
</table>:<NoData/>}


    </>
  )
}
