import React from 'react'
import { useForm } from 'react-hook-form'
import useToggle from '../../../Hooks/UseToggle';
import axios from 'axios';
import { AUTH_URLS } from '../../../Constants/END_POINTS';

export default function ChangePass() {
  let{register,formState:{errors},handleSubmit,watch}=useForm();
    const [firstPassword,toggleFirstPassword]=useToggle();
     const [secondPassword,toggleSecondPassword]=useToggle();
  const[showPassword,togglePassword]=useToggle();
    const password=watch("newPassword");
  const onSubmit=async(data)=>{
  try {

     const response=await axios.put(AUTH_URLS.ChangePassword,data,
     {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}


   )
   console.log(response);

  } catch (error) {
    console.log(error);

  }

  }
  return (
    <>
    <div>

   <div className='row'>
    <div className='col-md-8 m-auto '>
      <h5 className='my-3'>ChangePassword</h5>
<form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3 ">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={showPassword ?"text" :"password"} className="form-control" placeholder="old Password" aria-label="password" aria-describedby="basic-addon1"
  {...register("oldPassword",{
    required:"password is required",
    minLength:{
      value:8,
      message:"length must be 8 at least"
    }

  })}
  />
    <span class="input-group-text" onClick={togglePassword}> {showPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.oldPassword&& <div className='alert alert-danger p-2'>{errors.oldPassword.message}</div>}
{/* //////////////////// */}
        <div className="input-group mb-3 ">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={firstPassword ?"text" :"password"} className="form-control" placeholder="old Password" aria-label="password" aria-describedby="basic-addon1"
  {...register("newPassword",{
    required:"password is required",
    minLength:{
      value:8,
      message:"length must be 8 at least"
    }

  })}
  />
    <span class="input-group-text" onClick={toggleFirstPassword}> {firstPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.newPassword&& <div className='alert alert-danger p-2'>{errors.newPassword.message}</div>}
{/* /////////////////
//  */}
        <div className="input-group mb-3 ">
  <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
  <input type={secondPassword ?"text" :"password"} className="form-control" placeholder="old Password" aria-label="password" aria-describedby="basic-addon1"
  {...register("confirmNewPassword",{
    required:"password is required",
    minLength:{
      value:8,
      message:"length must be 8 at least"
    },
     validate:(value)=> value === password || "not the same password"

  })}
  />
    <span class="input-group-text" onClick={toggleSecondPassword}> {secondPassword?<i class="fa-regular fa-eye-slash"></i>: <i class="fa-regular fa-eye"></i>}</span>
</div>
{errors.confirmNewPassword&& <div className='alert alert-danger p-2'>{errors.confirmNewPassword.message}</div>}






<button className='btn bg-green text-white form-control'>change password</button>
</form>
    </div>
   </div>
    </div>

    </>
  )
}
