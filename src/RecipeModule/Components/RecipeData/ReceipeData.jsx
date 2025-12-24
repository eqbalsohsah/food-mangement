import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../../../SharedModule/Component/Loader/Loader';

export default function ReceipeData() {

const{id}=useParams();
 const BASE_URL="https://upskilling-egypt.com:3006/";
const[loading,setLoading]=useState(true);
console.log(id);
   const[categoriesList,setCategoriesList]=useState([]);
    const[tagsList,setTagsList]=useState([]);
  /////////////////////for input bfile image
const[preview,setPreview]=useState(null);
/////////////////////////////////////////////
  const navigate=useNavigate();
  let{register,handleSubmit,formState:{errors,isSubmitting},setValue,watch}=useForm();

  const appendToFormData=(data)=>{
    const formData=new FormData();
    formData.append('name',data.name);
    formData.append('price',data.price);
     formData.append('description',data.description);
      formData.append('tagId',data.tagId);
       formData.append('categoriesIds',data.categoriesIds);
        formData.append('recipeImage',data.recipeImage[0]);
        return formData;
  }
  const onSubmit= async(data)=>{

const recipeData=appendToFormData(data);
if (id){
     try {

let response=await axios .put(`https://upskilling-egypt.com:3006/api/v1/Recipe/${id}`,recipeData,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
navigate('/dashboard/receipes');
toast.success('receipe updattedddddddddddddddddd');
console.log(response);

 } catch (error) {
  console.log(error);

 }

}
else{
    try {
  let response=await axios.post('https://upskilling-egypt.com:3006/api/v1/Recipe/',recipeData,
  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}

);
console.log(response);
navigate('/dashboard/receipes');
toast.success('receipe added');


} catch (error) {
  console.log(error.response?.data);

}
}

}


  // get recipe detailsssssssssssssssssssssssssssssssssss
  const getRecipeDetails=async()=>{
   try {
     let {data}=await axios.get(`https://upskilling-egypt.com:3006/api/v1/Recipe/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
    // setReceipeDetails(response.data);
    console.log(data.imagePath);

 setValue("name",data?.name);
 setValue("price",data?.price);
 setValue("tagId",data?.tag?.id);
 setValue("categoriesIds",data?.category[0]?.id);
setPreview( BASE_URL + data.imagePath);
 setValue("description",data?.description);



   } catch (error) {
    console.log(error);

   }
   finally{
    setLoading(false);
   }
  }



  useEffect(()=>{
    if(id)
    getRecipeDetails();
  },[ ])
  // getAllCategories
    const getAllCategories= async()=>{
      try {
        let response= await  axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
        setCategoriesList(response.data.data);



      } catch (error) {
        console.log(error);

      }
    }
    // getAllTags
     const getAllTags= async()=>{
      try {
        let response= await  axios.get('https://upskilling-egypt.com:3006/api/v1/tag/?pageSize=10&pageNumber=1',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
        setTagsList(response.data);

      } catch (error) {
        console.log(error);

      }
    }

      useEffect(()=>{
        getAllCategories();
        getAllTags();

      },[])
  return (
    <>

     <div className="bg-color my-3  d-flex justify-content-between align-items-center p-3">
    <div className="caption">
      <h4>Fill the<spn className="text-green"> Recipes</spn>  !</h4>
      <p>Fill the Recipes !</p>
    </div>
    <button className='  btn  bg-green text-white ' onClick={()=>navigate("/dashboard/receipes")}>All Recipes <i className='fa fa-arrow-right'></i></button>
   </div>
   {/* fill receipe form */}

   <form className=' w-75 p-5 m-auto' onSubmit={handleSubmit(onSubmit)} >
      <input type="text" className="form-control my-2" placeholder=" Receipe name" aria-label="email" aria-describedby="basic-addon1"
      // defaultValue={recipeDetails?.name}
{...register('name',{required:"name is required"})}
  />
  {errors.name&&<span className='text-danger'>{errors.name.message}</span>}
  {/* selecttagId */}
  <select className="form-select my-2" aria-label="Default select example"
  // defaultValue={recipeDetails?.tagId}
  {...register("tagId",{required:"field is required"})}
  >
<option value="">tag</option>
 {tagsList?.map((tag)=>(
   <option key={tag?.id} value={tag?.id}>{tag?.name}</option>
 ))}
</select>
  {errors.tagId&&<span className='text-danger'>{errors.tagId.message}</span>}
      <input type="number" className="form-control my-2" placeholder=" Receipe price" aria-label="email" aria-describedby="basic-addon1"
      // defaultValue={recipeDetails?.price}
      {...register('price',{required:"filed is required"})}/>
{errors.price&&<span className='text-danger'>{errors.price.message}</span>}
      <select class="form-select my-2" aria-label="Default select example"
      // defaultValue={recipeDetails?.categoriesIds}
      {...register('categoriesIds',{required:"field is required"})}>
  <option value="">Category</option>
  {categoriesList?.map((category)=>(
   <option key={category?.id} value={category?.id}>{category?.name}</option>
 ))}
</select>
{errors.categoriesIds&&<span className='text-danger'>{errors.categoriesIds.message}</span>}

       <textarea className='form-control my-2 'placeholder='description'
      //  defaultValue={recipeDetails?.description}
       {...register('description',{required:"requireeed"})}/>
{errors.description&&<span className='text-danger'>{errors.description .message}</span>}
        <input type="file" className="form-control my-2" placeholder=" Receipe image" aria-label="email" aria-describedby="basic-addon1"
accept='image/*'
        {...register('recipeImage',{
          onChange:(e)=>{
            const file=e.target.files[0];
            if(file){
              setPreview(URL.createObjectURL(file));
            }
          }
        })}/>
        {preview && (
          <img src={preview} alt="img"
          style={{
            width:"200px",
            marginTop:"10px"
          }}/>
        )}

<div className="d-flex justify-content-end my-4">
<button className={`btn  btn-success mx-3 ${isSubmitting?"opacity-50":""}`} disabled={isSubmitting} > {id?"update recipe":"save"}</button>
<button className='btn btn-outline-success'>cancel</button>
</div>
   </form>
    </>
  )
}
