import React, { useEffect, useState } from 'react'
import Header from '../../../SharedModule/Component/Header/Header'
import header2 from "../../../assets/images/header2.png"
import axios from 'axios'
import NoData from '../../../SharedModule/Component/NoData/NoData';


export default function RecipesList() {
  const BASE_URL="https://upskilling-egypt.com:3006/";
  const[receipesList,setReceipesList]=useState([]);

    const getAllReceipes= async()=>{

      try {
         const response= await axios.get('https://upskilling-egypt.com:3006/api/v1/Recipe/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
        setReceipesList(response.data.data);
           console.log(response.data.data);

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
  <button className=' btn bg-green text-white'>Add New Item</button>
</div>
       <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Receipe  Name </th>
       <th scope="col">Receipe  image </th>
         <th scope="col">price </th>
      <th scope="col">Description</th>


    </tr>
  </thead>
  <tbody>
{ receipesList.length>0 ?receipesList.map((receipe)=>(
    <tr>
      <th scope="row">{receipe.id}</th>
      <td>{receipe.name}</td>
   <td><img src={`${BASE_URL}${receipe.imagePath}`}  className='w-25 imgsize'/></td>
         <td>{receipe.price}</td>
      <td>{receipe.description}</td>



    </tr>
)) :<NoData/>}

     </tbody>
</table>

    </>
  )
}
