import React, { useState } from 'react'
import logo from "../../../assets/images/logo.png"
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify';
import useToggle from '../../../Hooks/UseToggle';


export default function Login() {
  let{register,formState:{errors},handleSubmit}=useForm();
  const[showPassword,togglePassword]=useToggle();
  let navigate=useNavigate();
  const onSubmit= async(data)=>{
    try {
      let response= await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Login",data);
localStorage.setItem("token",response.data.token);
navigate('/dashboard');
toast.success("login Success");

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
      {/* <div className='auth-container '>
        <div className="container-fluid bg-overlay">
          <div className='row vh-100 justify-content-center align-items-center'>
            <div className='col-lg-5 col-md-7 bg-white p-3  rounded-3'>
           <div className="form-container ">
            <div className="logo-container text-center">
              <img  className ="w-50"src={logo} alt="logo"/>
            </div>
            <div className="title-container">
              <h5>Log In</h5>
              <p className='text-muted'> Welcome Back! Please enter your details</p>
            </div>
            <form>
              <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"> <i className='fa fa-envelope'></i></span>
  <input type="text" class="form-control" placeholder=" Enter your E-mail" aria-label="email" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"><i  className='fa fa-key'></i></span>
  <input type="password" class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1"/>
</div>
<div className="links d-flex justify-content-between">
  <Link to="/register" className='text-decoration-none text-black'>Register Now? </Link>
  <Link to="/forget-pass" className='text-decoration-none text-green'>Forgot Password?</Link>
</div>
<button className=' btn bg-green form-control  text-white my-2' type='submit'>Login</button>
            </form>
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
              <h5>Log In</h5>
              <p className='text-muted'> Welcome Back! Please enter your details</p>
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
<div className="input-group mb-3 ">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={showPassword ?"text" :"password"} class="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1"
  {...register("password",{
    required:"password is required",
    minLength:{
      value:8,
      message:"length must be 8 at least"
    }

  })}
  />
    <span class="input-group-text" onClick={togglePassword}> {showPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.password&& <div className='alert alert-danger p-2'>{errors.password.message}</div>}
<div className="links d-flex justify-content-between">
  <Link to="/register" className='text-decoration-none text-black'>Register Now? </Link>
  <Link to="/forget-pass" className='text-decoration-none text-green'>Forgot Password?</Link>
</div>
<button className='btn bg-green w-100 text-white my-2'>Login</button>
            </form>
           </div>
    </>
  )
}
