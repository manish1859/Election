import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { abc } from '../../Parent';
import { FaCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Shop = () => {
    const { pageTitle, setPageTitle } = useContext(abc);
  const shop = [
    {
      head: 'Newspaper',
      rate: '$380.00$ 340.00',
      img: 'https://election-react.wpolive.com/product/1.jpg'
    },
    {
      head: 'Politics Poster',
      rate: '$85.00$65.00',
      img: 'https://election-react.wpolive.com/product/2.jpg'
    },
    {
      head: 'White Notebook',
      rate: '$300.00$285.00',
      img: 'https://election-react.wpolive.com/product/3.jpg'
    },
    {
      head: 'Yellow Notebook',
      rate: '$178.00$176.00',
      img: 'https://election-react.wpolive.com/product/4.jpg'
    },
    {
      head: 'Politics Book',
      rate: '$130.00$125.00',
      img: 'https://election-react.wpolive.com/product/5.jpg'
    },
    {
      head: 'Politics Id Card',
      rate: '$600.00$548.00',
      img: 'https://election-react.wpolive.com/product/6.jpg'
    },
  ]


      useEffect(() => {
        setPageTitle("Home");
      }, [setPageTitle]);
  
  return (
    <div>
            <div className="banner">
              <div className="banner-overlay">
                <h1>Volunteer</h1>
                <p style={{ color: 'white' }}>
                  <Link to='/' className='parenthome'>{pageTitle}</Link> • Volunteer
                </p>
              </div>
            </div>
      <div className='container mt-5 py-5'>
        <div className='row mt-5'>
          {
            shop.map((name) => {
              return (
                <div className='col-lg-4 col-md-6 col-sm-12'>
                  <div className='  card card-shop-content'>
                    <img src={name.img} className='w-100' alt="" />
                    <div className='shop-card-content'>
                      <h3 className='shop-h3'>{name.head}</h3>
                      <span>{name.rate}</span><br />
                      <button>Add to cart <FaShoppingCart /></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>



          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 mx-auto shop-btn5 text-center'>
                <span><IoIosArrowBack /></span>
                <span style={{background:'#b81535',color:'white'}}>1</span>
                <span>2</span>
                <span>3</span>
                <span><IoIosArrowForward /></span>
              </div>
            </div>
          </div>


    </div>
  )
}

export default Shop
