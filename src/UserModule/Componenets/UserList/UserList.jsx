import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../../SharedModule/Component/Header/Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteConfirmation from '../../../SharedModule/Component/DeleteConfirmation/DeleteConfirmation';
import { toast } from 'react-toastify';
import NoData from '../../../SharedModule/Component/NoData/NoData';

export default function UserList() {

     const[users,setUsers]=useState([]);
      const[userName,setUserName]=useState('');
      const[userId,setUserId]=useState('');
       const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) =>{

setUserName(user.userName);
setUserId(user.id);
    setShow(true);
  }
  const getUsers=async()=>{
    try {

      let  response=await axios.get('https://upskilling-egypt.com:3006/api/v1/Users/?pageSize=10&pageNumber=1',
         {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
      );

    setUsers(response.data.data);
        console.log(response.data.data);



    } catch (error) {
      console.log(error);

    }
  }

  const deleteUser=async()=>{
    const response= await axios.delete(`https://upskilling-egypt.com:3006/api/v1/Users/${userId}`,
       {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}

    )
    console.log(response);
    toast.success('deleteeeeeeee success');


    handleClose();
    getUsers();


  }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div>
<Header title={"users  list"} description={"You can now add your items that any user can order it from the Application and you can edit"}/>
  <h1>Users list</h1>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <DeleteConfirmation deleteItem={"user "} name={userName}/>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="danger" onClick={deleteUser}>
          Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {users?.length>0?
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">user name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
{users?.map((user)=>(
 <tr key={user?.id}>
      <th scope="row">{user?.id}</th>
      <td>{user?.userName}</td>

  <td>{user?.email}</td>
      <td>{user?.phoneNumber}</td>
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

        <li className="dropdown-item " onClick={()=>handleShow(user)}><i class="fa-solid fa-trash text-green"></i>Delete</li>
      </ul>
    </div>
         </td>

      </tr>

))}

  </tbody>
</table>:<NoData/>}
    </div>
  )
}
