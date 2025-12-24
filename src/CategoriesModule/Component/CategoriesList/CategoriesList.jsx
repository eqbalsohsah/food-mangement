import React, { useEffect } from 'react'
import Header from '../../../SharedModule/Component/Header/Header'
import header2 from "../../../assets/images/header2.png"
import axios from 'axios'
import { useState } from 'react'
import NoData from '../../../SharedModule/Component/NoData/NoData'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from '../../../SharedModule/Component/DeleteConfirmation/DeleteConfirmation'
import { toast } from 'react-toastify'



export default function CategoriesList() {

 const [value,setValue]=useState('');
 const handelChange=(e)=>{
setValue(e.target.value);
console.log(value);

 }
  const[categoriesList,setCategoriesList]=useState([]);
  const[categorId,setCategoryId]=useState(0);

   const[categoryName,setCategoryName]=useState('');
     const[catId,setCatId]=useState(0);
      const[catName,setCatName]=useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (category) =>{

   setCategoryId(category.id);
setCategoryName(category.name)




     setShow(true);
   }

   ///////////////////////model for add category
     const [showAdd, setShowAdd] = useState(false);
      const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = (category) =>
   {
 setCatId(category.id);

setValue(category.name);


     setShowAdd(true);
   }


////////////////////////////// end model
///////////////////////////////////add category
// const AddCategory=async()=>{
//   try {
//     let response=await axios.post("https://upskilling-egypt.com:3006/api/v1/Category/",{name:value},
//        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
//     );
//     console.log(response);
//     getAllCategories();
//     setValue("");
//     toast.success("category addeddddddddddd");
//     handleCloseAdd();

//   } catch (error) {
//     console.log(error);

//   }


// }
//////////////////enddddddd add category
//////////////////////////update category


    const UpdateCategory=async()=>{
  let response=await axios.put(`https://upskilling-egypt.com:3006/api/v1/Category/${catId}`,{name:value},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
  console.log(response);
  toast.success("updateeeeee success");
  getAllCategories();
  handleCloseAdd();

}



const AddCategory=async()=>{
  try {
    let response=await axios.post("https://upskilling-egypt.com:3006/api/v1/Category/",{name:value},
       {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
    );
    console.log(response);
    getAllCategories();
    setValue("");
    toast.success("category addeddddddddddd");
    handleCloseAdd();

  } catch (error) {
    console.log(error);

  }


}

  const getAllCategories= async()=>{
    try {
      let response= await  axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      setCategoriesList(response.data.data);


    } catch (error) {
      console.log(error);

    }
  }
  const deleteCategory= async()=>{
try {

  let response=await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Category/${categorId}`,
    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
    console.log(response);
    toast.success("delete Success");
handleClose();
 getAllCategories();

} catch (error) {
console.log(error);

}
  }
  //////////////////////// getdata by catID
//     const getCatById=async()=>{
//      try {
//        let response=await axios.get(`https://upskilling-egypt.com:3006/api/v1/Category/${catId}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
// setValue(response.data.name);



//      } catch (error) {
//       console.log(error);

//      }
//     }

//     useEffect(()=>{
// if(catId)
//        getCatById();

//     },[]);
  useEffect(()=>{
    getAllCategories();

  },[])
  return (
    <div>
    {/* //////////////////////// model for add category  */}

      <Modal show={showAdd} onHide={handleCloseAdd}>
  <Modal.Header closeButton>
          <Modal.Title> Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

 <input type="text" placeholder='ad category' className='form-control' onChange={handelChange} value={value}/>

        </Modal.Body>
        <Modal.Footer>

  <Button className=' btn bg-green text-white px-3' onClick={ catId? UpdateCategory :AddCategory}>
         {catId? "update" :"save"}
          </Button>
        </Modal.Footer>
      </Modal>


     {/* //////////////////////// end model for add category  */}
      <Header title={"Categories item"}  description={"You can now add your items that any user can order it from the Application and you can edit"} imgUrl={header2}/>
      <div className="new_item d-flex justify-content-between align-items-center my-2 bg-color p-3">
  <div>
    <h6 >Categories Table Details</h6>
    <p>You can check all details</p>
  </div>
  <button className=' btn bg-green text-white' onClick={handleShowAdd}>Add New Category</button>
</div>


      <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
<DeleteConfirmation deleteItem={"Category "} name={categoryName}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={deleteCategory}>
            Delete
          </Button>

        </Modal.Footer>
      </Modal>
      {categoriesList.length>0?
      <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Category Name</th>
      <th scope="col">Category creation Data</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
{ categoriesList.map((category)=>(
    <tr>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>{category.creationDate}</td>
      <td>
            <div className="dropdown">
      <span
        data-bs-toggle="dropdown"
        style={{ cursor: "pointer", fontSize: "20px" }}
      >
       <i class="fa-solid fa-ellipsis"></i>
      </span>

      <ul className="dropdown-menu">
        <li className="dropdown-item"> <i class="fa-regular fa-eye text-green"></i>View</li>
        <li className="dropdown-item" onClick={()=>handleShowAdd(category)}> <i class="fa-solid fa-pen-to-square text-green"></i>Edit</li>
        <li className="dropdown-item " onClick={()=>handleShow(category)}> <i class="fa-solid fa-trash text-green" ></i>Delete</li>
      </ul>
    </div>
      </td>

    </tr>
)) }

     </tbody>
</table>:<NoData/>}
    </div>
  )
}
