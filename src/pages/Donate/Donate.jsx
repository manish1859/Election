import React, { useContext, useEffect, useState } from "react";
import { abc } from "../../Parent";
import { Link } from "react-router-dom";
import "./Donate.css";
import visa from './Image/visa.png'
import mastercard from './Image/mastercard.png'
import skrill from './Image/skrill.png'
import Paypal from './Image/PAypal.png'

const Donate = () => {
  const { pageTitle, setPageTitle } = useContext(abc);
  

  useEffect(() => {
    setPageTitle("Home");
  }, [setPageTitle]);

  return (
    <div className="donate-main">
      <div className="banner">
        <div className="banner-overlay">
          <h1>Donate</h1>
          <p style={{ color: "white" }}>
            <Link to="/" className="parenthome">
              {pageTitle}
            </Link>{" "}
            • DONATE
          </p>
        </div>
      </div>
      <h2 className="make">
        {" "}
        <b>Make A Donation</b>
      </h2>
      <div className="donation">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="amount">
            <label
              htmlFor="amount"
              style={{ fontWeight: "bold", fontSize: "15px", color: "#031B4E" }}
            >
              Your Donation
            </label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Enter Donation Amount"
              className="input-amount"
            />
          </div>
        </div>
        <div className="form-container">
          <h3 className="form-title">Details</h3>
          <form className="details-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Adress" className="form-input" />
            </div>
            <div className="form-row">
              <textarea
                placeholder="Message"
                className="form-textarea"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="form-container">
          <h4 className="payment-title">Choose Your Payment Method</h4>

          <div className="payment-options">
            <label>
              <input type="radio" name="method" /> Payment By Card
            </label>
            <label>
              <input type="radio" name="method" /> Offline Donation
            </label>
          </div>

          <div className="payment-icons">
            
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="MasterCard" />
            <img src={skrill} alt="Skrill" />
            <img src={Paypal} alt="PayPal" />
          </div>

          <div className="payment-fields">
            <input type="text" placeholder="Card holder Name" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Expire Date" />
          </div>
        </div>
      </div>
     <div className="donate-btn-wrapper">
  <button className="donate-btn1">DONATE NOW</button>
</div>

    </div>
  );
};

export default Donate;
