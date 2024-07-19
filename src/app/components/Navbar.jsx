"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { authContext } from '../../../context/authcontext'
import { MdShoppingBasket } from "react-icons/md";
import Link from 'next/link'
import Swal from 'sweetalert2'
import {app} from '../../../firebase/credentials'
import { getAuth, signOut } from 'firebase/auth'

const Navbar = () => {

  const pathname =usePathname()
  const checkUser = useContext(authContext)
  const auth = getAuth(app);

  const LogoutUser=()=>{
signOut(auth).then(() => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your are Logout",
    showConfirmButton: false,
    timer: 1500
  });
}).catch((error) => {
  console.log(error);
});
  }
  return (
    <>
     <header class="text-gray-600 body-font shadow-lg">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <div class="w-10 h-10 text-white text-2xl p-2 bg-blue-500 rounded-full flex justify-center items-center">

      <MdShoppingBasket />
      </div>
      <span class="ml-3 text-xl">Shop Now</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
      <Link className={`link mr-5 hover:text-gray-900 ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
          <Link className={`link mr-5 hover:text-gray-900 ${pathname === '/about' ? 'active' : ''}`} href="/about">
            About
          </Link>
          <Link className={`link mr-5 hover:text-gray-900 ${pathname === '/productdetails' ? 'active' : ''}`} href="/products">
            Products
          </Link>
          {/* {checkUser && <Link className={`link mr-5 hover:text-gray-900 ${pathname === '/mycart' ? 'active' : ''}`} href="/cart">
            My Cart
          </Link>} */}
          

    </nav>
    {checkUser?
    <button onClick={LogoutUser} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Logout
      
    </button>
    :<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <Link className={`link  hover:text-gray-900 ${pathname === '/mycart' ? 'active' : ''}`} href="/Login">
    Login
          </Link>
      
    </button>}
    
  </div>
</header>
    </>
  )
}

export default Navbar
