import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import logo from "../../../assets/images/logo.png"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useToggle from '../../../Hooks/UseToggle';

export default function ResetPass() {
  let{register,handleSubmit,formState:{errors},watch}=useForm();
  //  const[showPassword,setShowPassword]=useState(false);
  //   const[showPassword1,setShowPassword1]=useState(false);
  const [firstPassword,toggleFirstPassword]=useToggle();
   const [secondPassword,toggleSecondPassword]=useToggle();

  const password=watch("password");
  const navigate=useNavigate();
  const onSubmit= async(data)=>{
try {
  let response= await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset',data);
  console.log(response);
  toast.success("reset password success");
  navigate('/login');
  console.log(data);


} catch (error) {
  console.log(error);
}

  }
  return (
    <>
      <div className="form-container ">
            <div className="logo-container text-center">
              <img  className ="w-50"src={logo} alt="logo"/>
            </div>
            <div className="title-container">
              <h5> Reset  Password</h5>
              <p className='text-muted'> Please Enter Your Otp  or Check Your Inbox</p>
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
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type="otp" class="form-control" placeholder="Otp" aria-label="otp" aria-describedby="basic-addon1"
  {...register("seed",{
    required:"otp is required",


  })}
  />
</div>
{errors.seed&& <div className='alert alert-danger p-2'>{errors.seed.message}</div>}
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={firstPassword ?"text" :"password"} class="form-control" placeholder="new password" aria-label="password" aria-describedby="basic-addon1"
  {...register("password",{
    required:"password is required",
      minLength:{
      value:8,
      message:"length must be 8 at least"
    }

  })}
  />
   <span class="input-group-text" onClick={toggleFirstPassword}> {firstPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.password&& <div className='alert alert-danger p-2'>{errors.password.message}</div>}
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={secondPassword ?"text" :"password"} class="form-control" placeholder="confirm password" aria-label="confirmpassword" aria-describedby="basic-addon1"
  {...register("confirmPassword",{
    required:"confirm password is required",
     minLength:{
      value:8,
      message:"length must be 8 at least"
    },
    validate:(value)=> value === password || "not the same password"

  })}
  />
    <span class="input-group-text" onClick={toggleSecondPassword}> {secondPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.confirmPassword && <div className='alert alert-danger p-2'>{errors.confirmPassword.message}</div>}

<button className='btn bg-green w-100 text-white my-2'>Reset Password</button>
            </form>
           </div>
    </>
  )
}
