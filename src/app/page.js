"use client"
import React from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/authcontext'
// import Card from './components/Card'
// import Workflow from './components/Workflow'
// import Carousel from './components/Carousel'
// import Carousel from './components/Carousel'

const page = () => {
  const user = useContext(authContext)
  console.log(user);
  return (
    <>
    
<div className='h-96 flex justify-center items-center flex-col text-2xl font-extrabold'>
  <div>Home Page</div> 
  <br />
  {user && <p className='text-lg font-normal '>{user.email + " Logged IN"}</p> }
  {user ===false? <p className='text-lg font-normal '>User Not Logged In</p>:null}
</div>

      {/* <Carousel/> */}
    {/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
     <Card/>
    </div>
  </div>
</section> */}
     
     {/* <Workflow/> */}
    </>
  )
}

export default page
