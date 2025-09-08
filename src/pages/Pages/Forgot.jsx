import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Forget = () => {
  return (
    <div className='login-main-page'>
         <div className='container'>
           <div className='row'>
             <div className='col-lg-5 mx-auto'>
               <div className='login-chid-page'>
                   <h2>Forget Password</h2>
                   <span>Reset your account password</span><br />
                   <input type="email" placeholder='Email' /><br /><br />
                   
                   <button className='Login-btn w-100'>RESEND PASSWORD</button>
                   <div className='d-flex justify-content-evenly text-center media-btn3'>
                     <button style={{backgroundColor:'#3b5998'}}><FaFacebookF /></button>
                     <button style={{backgroundColor:'#55acee'}}><FaTwitter /></button>
                     <button style={{backgroundColor:'#0077b5'}}><FaLinkedinIn /></button>
                   </div>
                   <p>Don't have an account?  <a href="#">Create free account</a></p>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default Forget