import React, { useEffect } from 'react'
import Header from '../../../SharedModule/Component/Header/Header'
import header2 from "../../../assets/images/header2.png"
import axios from 'axios'
import { useState } from 'react'
import NoData from '../../../SharedModule/Component/NoData/NoData'

export default function CategoriesList() {
  const[categoriesList,setCategoriesList]=useState([]);

  const getAllCategories= async()=>{
    try {
      let response= await  axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      setCategoriesList(response.data.data);


    } catch (error) {
      console.log(error);

    }
  }
  useEffect(()=>{
    getAllCategories();
  },[])
  return (
    <div>
      <Header title={"Categories item"}   description={"You can now add your items that any user can order it from the Application and you can edit"} imgUrl={header2}/>
      <div className="new_item d-flex justify-content-between align-items-center my-2 bg-color p-3">
  <div>
    <h6 >Categories Table Details</h6>
    <p>You can check all details</p>
  </div>
  <button className=' btn bg-green text-white'>Add New Category</button>
</div>
      <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Category Name</th>
      <th scope="col">Category creation Data</th>

    </tr>
  </thead>
  <tbody>
{ categoriesList.length>0 ?categoriesList.map((category)=>(
    <tr>
      <th scope="row">{category.id}</th>
      <td>{category.name}</td>
      <td>{category.creationDate}</td>

    </tr>
)) : <NoData/>}

     </tbody>
</table>
    </div>
  )
}
