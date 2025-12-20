
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NotFound from './SharedModule/Component/NotFound/NotFound'
import AuthLayout from './SharedModule/Component/AuthLayout/AuthLayout'
import Login from './AuthModule/Components/Login/Login'
import Register from './AuthModule/Components/Register/Register'
import ResetPass from './AuthModule/Components/ResetPass/ResetPass'
import ForgetPass from './AuthModule/Components/ForgetPass/ForgetPass'
import VerifyAccount from './AuthModule/Components/VerifyAccount/VerifyAccount'

import DashBoard from './DashBoardModule/Components/DashBoard/DashBoard'
import RecipesList from './RecipeModule/Components/RecipesList/RecipesList'
import ReceipeData from './RecipeModule/Components/RecipeData/ReceipeData'
import CategoriesList from './CategoriesModule/Component/CategoriesList/CategoriesList'
import CategoryData from './CategoriesModule/Component/CategoryData/CategoryData'
import UserList from './UserModule/Componenets/UserList/UserList'
 import { ToastContainer } from 'react-toastify';
import MasterLayout from './SharedModule/Component/MasterLayout/MasterLayout'
import AuthContextProvider from './Context/AuthContext'




function App() {
  const routes=createBrowserRouter([
    {
      path:"",
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Login/>},
        {path:"login",element:<Login/>},
         {path:"register",element:<Register/>},
          {path:"reset-pass",element:<ResetPass/>},
           {path:"forget-pass",element:<ForgetPass/>},
            {path:"verify-account",element:<VerifyAccount/>},
      ]
    },
{
  path:"dashboard",
 element: <MasterLayout/> ,
  errorElement:<NotFound/>,
  children:[
    {index:true,element:<DashBoard/>},
     {path:"receipes",element:<RecipesList/>},
      {path:"recipe-data",element:<ReceipeData/>},
       {path:"categories",element:<CategoriesList/>},
        {path:"category-data",element:<CategoryData/>},
         {path:"users",element:<UserList/>},

  ]

}
  ])


  return (
    <>
<AuthContextProvider>
<RouterProvider router={routes}></RouterProvider>
 <ToastContainer />
 </AuthContextProvider>
    </>
  )
}

export default App
