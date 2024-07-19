"use client"
import { createContext,useEffect,useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {app} from "../firebase/credentials"
export const authContext=createContext()



export const AuthProvider=({children})=>{
    const auth = getAuth(app);
    const [checkUser, setcheckUser] = useState();
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setcheckUser(user)
        } else {
          setcheckUser(false)
        }
      });
},[])
    return(
        <authContext.Provider value={checkUser} >
        {children}
        </authContext.Provider>
    )

}