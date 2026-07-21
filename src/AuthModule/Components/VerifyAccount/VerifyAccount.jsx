import React from 'react'
import logo from "../../../assets/images/logo.png"
import { useForm } from 'react-hook-form'
import { AUTH_URLS } from '../../../Constants/END_POINTS';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function VerifyAccount() {
  let{register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
  const navigate=useNavigate();
  const onSubmit=async(data)=>{
    let  response=await axios.put(AUTH_URLS.verify,data);
    navigate("/");
try {
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
                   <h5>  Verify Account  </h5>
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
  {...register("code",{
    required:"otp is required",


  })}
  />
</div>
{errors.code&& <div className='alert alert-danger p-2'>{errors.code.message}</div>}
<button className='btn bg-green w-100 text-white my-2'>   {isSubmitting ?<>
  send
    <span className='spinner-border spinner-border-sm ms-2' role='status' aria-hidden='true'/>
  </>:"send"}
  </button>

                 </form>
                 </div>
    </>
  )
}
