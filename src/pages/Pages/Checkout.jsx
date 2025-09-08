import React, { useContext, useEffect } from 'react';
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const { pageTitle, setPageTitle } = useContext(abc);

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);
  return (
    <div>
            <div className="banner">
              <div className="banner-overlay">
                <h1>Checkout</h1>
                <p style={{ color: 'white' }}>
                  <Link to='/' className='parenthome'>{pageTitle}</Link> • Checkout
                </p>
              </div>
            </div>

                  <div className='container'>
        <div className='row'>
          <div className='col-lg-8 checkout-head'>
            <h3>Your Checkout</h3>
            <span>There are 4 products in this list</span>
            <div className='row checkout-div'>
              <div className='col-lg-6'>
                <div><p className='d-flex justify-content-between'><span>Returning customer?</span><a href=''>Click Here to Login</a></p></div>
              </div>
              <div className='col-lg-6'>
                <div><p className='d-flex justify-content-between'><span>Have a Coupon?
                </span><a href=''>Click Here to Enter</a></p></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    placeholder="LastName"
                  />
                  <label htmlFor="LastName">Last Name</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="Dristict"
                    placeholder="Dristict"
                  />
                  <label htmlFor="Dristict">Dristrict</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="Address"
                />
                <label htmlFor="Address" className='px-4'>Address</label>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="Post Code"
                    placeholder="Post Code"
                  />
                  <label htmlFor="Post Code">Post Code</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="Email Address"
                    placeholder="Email Address"
                  />
                  <label htmlFor="Email Address">Email Address</label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="Phone no."
                  placeholder="Phone no."
                />
                <label htmlFor="Phone no." className='px-4'>Phone no.</label>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="Order Notes"
                  placeholder="Order Notes"
                />
                <label htmlFor="Order Notes" className='px-4'>Order Notes</label>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='row checkout-order'>
              <div className='col-lg-11 mx-auto text-center '>
                <h3>Your Order</h3>
                <p><span>Products</span><span>Subtotal
                </span></p>
                <p><span>total</span><span>$0</span></p>
              </div>
            </div>

            <div className='row checkout-paytem'>
              <div className='col-lg-11 mx-auto '>
                <h3>paytem</h3>
                <input type="radio" />
                <label htmlFor="">Direct Bank Transfer</label>
                <br />
                <input type="radio" />
                <label htmlFor="">Cash On delivery</label>
                <br />
                <input type="radio" />
                <label htmlFor="">Online Getway</label><br />
                <button>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
