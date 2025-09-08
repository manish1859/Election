import React, { useContext, useEffect } from 'react';
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { pageTitle, setPageTitle } = useContext(abc);
  
    useEffect(() => {
      setPageTitle('Home');
    }, [setPageTitle]);
  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <h1>Cart</h1>
          <p style={{ color: 'white' }}>
            <Link to='/' className='parenthome'>{pageTitle}</Link> • Cart
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 my-5'>
            <div className='cart-content'>
            <h2>Your Cart</h2>
            <span>There are 0 products in this list</span>

<div style={{ overflowX: 'auto', width: '100%' }}>
    <div
      style={{
        display: 'flex',
        minWidth: '100%',
        gap: '20px',
        
        background: '#fff8ee',
        fontSize: '20px',
        padding: '10px 0',
      }}
    >
      <span >Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Subtotal</span>
      <span>Remove</span>
    </div>
  </div>


              </div>
              <div className='row'>
                <div className='col-lg-5 cart-input'>
                  <input type="text" name="" id="" className='w-100' placeholder='Enter your coupon'/>
                </div>
                <div className='col-lg-7 d-flex justify-content-between'>
                  <button className='submit-btn'>Apply</button>
                  <button className='submit-btn'>Update Cart</button>
                </div>
              </div>
          </div>
          <div className='col-lg-4 py-3'>
            <div className='cart-total px-4'>
              <h3>Cart Totals</h3>
              <p><span>Subtotal</span><span>$0</span></p>
              <div className='radio-cart'>
                <span>Shipping</span>
                <div>
                  <li><input type="radio" /><label htmlFor="Freeshiping">Free Shipping</label></li>
                  <li><input type="radio" /><label htmlFor="Freeshiping">Local Pickup: $10.00</label></li>
                  <li>Shipping options will be updated during checkout.</li>
                </div>
              </div>
                <p><span>Total</span><span>$0</span></p>
                  
                <div className='cart-paytem'>
                <button className='submit-btn m-2'>Proceed To CheckOut</button>
                </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Cart