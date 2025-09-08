import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import './gallery.css'

const Login = () => {
  return (

    <div className='login-main-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 mx-auto'>
            <div className='login-chid-page'>
                <h2>Sign In</h2>
                <span className='log-sign'>Sign in to your account</span> <br /> <br />
                <input type="email" placeholder='Email' style={{marginBottom:'20px'}}/> <br />
                <input type="password" placeholder='password' />
                <div className='d-flex justify-content-between'>
                  <div className=' input-lable'><input type="checkbox" /><label htmlFor="">Remmber Me</label></div>
                  <a href="#">Forget Password ?</a>
                </div>
                <button className='Login-btn w-100'>LOGIN</button>
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

export default Login
