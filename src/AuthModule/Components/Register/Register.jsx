import React from 'react'
import logo from "../../../assets/images/logo.png"
import { useForm } from 'react-hook-form'
import useToggle from '../../../Hooks/UseToggle';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AUTH_URLS } from '../../../Constants/END_POINTS';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'bootstrap';


export default function Register() {
  let{register,handleSubmit,formState:{errors,isSubmitting},watch}=useForm();
    const [firstPassword,toggleFirstPassword]=useToggle();
   const [secondPassword,toggleSecondPassword]=useToggle();
     const navigate=useNavigate();
    const password=watch("password");
     const onSubmit= async(data)=>{
try {
  let response= await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Register',data);
  console.log(response);
  toast.success(response?.data?.message)

  navigate('/verify-account');


  console.log(data);


} catch (error) {
  toast.error(error?.response?.data?.message || "register failed");
}

  }

  return (
    <>
      <div className="form-container ">
                 <div className="logo-container text-center">
                   <img  className ="w-50"src={logo} alt="logo"/>
                 </div>
                 <div className="title-container">
                   <h5>Register</h5>
                   <p className='text-muted'> Welcome Back! Please enter your details</p>
                   </div>
                   <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row">
                      {/* /////////////////////////////// */}
                      <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope"></i></span>
  <input type="text" class="form-control" placeholder=" Enter your name" aria-label="name" aria-describedby="basic-addon1"
  {...register("userName",{
    required: "the field is required",
  })}
  />
  {errors.userName && <div className='alert alert-danger p-1 w-100 my-1'>{errors.userName.message}</div>}
</div>

                      </div>
                      {/* ///////////////////////// */}
                         <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope "></i></span>
  <input type="text" class="form-control" placeholder=" Enter your email" aria-label="email" aria-describedby="basic-addon1"
  {...register("email",{
    required:"email is required",
    pattern:{
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message:"should be vaild mail"
    }
  })}
  />
  {errors.email&&<div className='alert alert-danger p-1 w-100 my-1'>{errors.email.message}</div>}
</div>
                      </div>
                       {/* ///////////////////////// */}
                         <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope "></i></span>
  <input type="text" className="form-control" placeholder=" country" aria-label="country" aria-describedby="basic-addon1"
  {...register("country",{
    required:"field is required",

  })}

  />
</div>
{errors.country&&<div className='alert alert-danger p-1 w-100 my-1'>{errors.country.message}</div>}
                      </div>
                       {/* ///////////////////////// */}
                         <div className="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope "></i></span>
  <input type="number" class="form-control" placeholder=" phone" aria-label="phone" aria-describedby="basic-addon1"
  {...register("phoneNumber",{
    required:"phone is required",

  })}
  />
</div>
  {errors.phoneNumber  &&<div className='alert alert-danger p-1 w-100 my-1'>{errors.phoneNumber .message}</div>}

                      </div>

                       {/* ///////////////////////// */}
                       <div className='col-md-6'>
                        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={firstPassword ?"text" :"password"} class="form-control" placeholder="new password" aria-label="password" aria-describedby="basic-addon1"
  {...register("password",{
    required:"password is required",


    pattern:{
      value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
      message:        "The password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long."
    }

  })}
  />
   <span class="input-group-text" onClick={toggleFirstPassword}> {firstPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.password&& <div className='alert alert-danger p-1 my-1'>{errors.password.message}</div>}
                       </div>

                       {/* ///////////////////////// */}
                       <div className='col-md-6'>
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
{errors.confirmPassword && <div className='alert alert-danger p-1 my-1'>{errors.confirmPassword.message}</div>}
                       </div>

                    </div>
                    <div className='link d-flex  justify-content-end'>
                     <Link to="/login" className='text-decoration-none text-green'>Login Now? </Link>
                    </div>
                    <button className='btn bg-green w-100 text-white my-2'>
                      {isSubmitting ? <>
                      Register
                        <span className='spinner-border spinner-border-sm ms-2' role='status' aria-hidden='true'/>
                      </>:"Register"}
                    </button>
                   </form>
                   </div>
    </>
  )
}
