"use client"
import React, { useState } from 'react'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'next/navigation'
import {app} from '../../../firebase/credentials'
import Swal from 'sweetalert2'
import Link from 'next/link'
const myAuth=getAuth(app)




const LoginForm = () => {

  const [username,setusername]=useState()
  const [useremail,setuseremail]=useState()
  const [userpassword,setuserpassword]=useState()
  const [LoginError,setLoginError]=useState(null)
  const router = useRouter()

  
  

  const formsubmited=(e)=>{
e.preventDefault()

  signInWithEmailAndPassword(myAuth, useremail, userpassword)
  .then((userCredential) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your are successfully  Logged In",
      showConfirmButton: false,
      timer: 1500
    });
  router.push('/')

    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    if (errorMessage==="Firebase: Error (auth/invalid-credential)."){
setLoginError("Invalid email or password")
setTimeout(()=>setLoginError(null), 5000);

    }
  });
  }

  
  return (
    <>
      
      <div class="lg:w-2/6  md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col m-auto w-full mt-6 ">
      <h2 class="text-gray-900 text-2xl text-center uppercase font-medium title-font mb-5">
      Login</h2>
<form onSubmit={(e)=>formsubmited(e)}>
    
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input required onChange={(e)=>setuseremail(e.target.value)} type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={useremail}/>
        
        
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
        <input required onChange={(e)=>setuserpassword(e.target.value)} type="password" id="password " name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  " value={userpassword}/>
        
        {LoginError!==null?<p className='text-[12px] text-red-500 pl-[3px]'>{LoginError}</p>:null}


      </div>
      <button type='submit' class="text-white w-full bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
      
      <p class="text-xs text-center text-gray-500 mt-3">Have an account? <Link  className='text-blue-500' href='/Signup'>Signup</Link> </p>
</form>
    </div>


    </>
  )
}

export default LoginForm
