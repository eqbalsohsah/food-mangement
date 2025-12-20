
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { createContext } from "react"

export const AuthContext=createContext(null);
export default function AuthContextProvider({children}){
    const [loginData,setLoginData]=useState(null);
    const saveData=()=>{
       const encodedToken=localStorage.getItem("token") ;
       const decodedToken=jwtDecode(encodedToken);
       setLoginData(decodedToken);


    }
    const logOut=()=>{
        localStorage.removeItem("token");
        setLoginData(null);
    }
useEffect(()=>{
    saveData();
},[]);

return (
<AuthContext.Provider value={{loginData,saveData,logOut}}> {children}</AuthContext.Provider>
)
};
