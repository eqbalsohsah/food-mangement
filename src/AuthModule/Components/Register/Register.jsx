import React from 'react'
import logo from "../../../assets/images/logo.png"
import { useForm } from 'react-hook-form'

export default function Register() {
  let{register,handleSubmit,formState:{errors}}=useForm();

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
                   <form>
                    <div class="row">
                      {/* /////////////////////////////// */}
                      <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope"></i></span>
  <input type="text" class="form-control" placeholder=" Enter your name" aria-label="email" aria-describedby="basic-addon1"
  {...register("email",{
    required:"email is required",
    pattern:{
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message:"should be vaild mail"
    }
  })}
  />
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
</div>
                      </div>
                       {/* ///////////////////////// */}
                         <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope "></i></span>
  <input type="text" class="form-control" placeholder=" country" aria-label="email" aria-describedby="basic-addon1"
  {...register("email",{
    required:"email is required",
    pattern:{
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message:"should be vaild mail"
    }
  })}
  />
</div>
                      </div>
                       {/* ///////////////////////// */}
                         <div class="col-md-6">
                                    <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"> <i class="fa fa-envelope "></i></span>
  <input type="number" class="form-control" placeholder=" phone" aria-label="email" aria-describedby="basic-addon1"
  {...register("email",{
    required:"email is required",
    pattern:{
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message:"should be vaild mail"
    }
  })}
  />
</div>
                      </div>
                       {/* ///////////////////////// */}

                       {/* ///////////////////////// */}

                    </div>
                   </form>
                   </div>
    </>
  )
}
