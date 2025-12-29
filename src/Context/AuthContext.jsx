
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { createContext } from "react"

export const AuthContext=createContext(null);
export default function AuthContextProvider({children}){
    const [loginData,setLoginData]=useState(null);
    const saveData=()=>{

       const encodedToken=localStorage.getItem("token") ;
       if(encodedToken){
       const decodedToken=jwtDecode(encodedToken);
       setLoginData(decodedToken);

       }
    }


useEffect(()=>{
   if(localStorage.getItem("token")){
    saveData();
   }
},[]);
 const logOut=()=>{
        localStorage.removeItem("token");
        setLoginData(null);
    }


return (
<AuthContext.Provider value={{loginData,saveData,logOut}}>
    {children}
    </AuthContext.Provider>
)
};
