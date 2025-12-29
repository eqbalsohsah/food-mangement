import React from 'react'
import logo from "../../../assets/images/logo.png"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AUTH_URLS } from '../../../Constants/END_POINTS';

export default function ForgetPass() {
  let{register,handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();
  const onSubmit= async(data)=>{
 try {
     let response= await axios.post(AUTH_URLS.forget,data)
console.log(response);
navigate("/reset-pass");
toast.success("Your request is being processed, please check your email");

 } catch (error) {
  console.log(error);
 }

  }
  return (
    <div>
      {/* <div className='auth-container '>
        <div className="container-fluid bg-overlay">
          <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-lg-5 col-md-7 bg-white p-3  rounded-3'>
           <div className="form-container ">
            <div className="logo-container text-center">
              <img  className ="w-50"src={logo} alt="logo"/>
            </div>
            <div className="title-container">
              <h5>Forgot Your Password?</h5>
              <p className='text-muted'> Welcome Back! Please enter your details</p>
            </div>

           </div>

            </div>

          </div>

        </div>

      </div> */}
         <div className="form-container ">
            <div className="logo-container text-center">
              <img  className ="w-50"src={logo} alt="logo"/>
            </div>
            <div className="title-container">
              <h5>Forgot Your Password?</h5>
              <p className='text-muted '> No worries! Please enter your email and we will send a password reset link </p>
            </div>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i className='fa fa-envelope'></i></span>
  <input type="text" class="form-control" placeholder=" Enter your E-mail" aria-label="email" aria-describedby="basic-addon1"
  {...register("email",{
    required:"email is required",
    pattern:{
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message:"should be vaild mail"
    }
  })}
  />
</div>
{errors.email&& <div className='alert alert-danger p-2'>{errors.email.message}</div>}


<button className='btn bg-green w-100 text-white my-2'>Submit</button>
            </form>

           </div>
    </div>
  )
}
