import React, { useContext, useEffect, useState } from 'react'
import { abc } from '../../Parent';
import { Link } from 'react-router-dom';


const Shopsingle = () => {
   const [abc1, setabc] = useState('tab1')
       const { pageTitle, setPageTitle } = useContext(abc);
   
   
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

      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='shop-single-img'>
              <img src="https://election-react.wpolive.com/product/1.jpg" className='w-100 p-4' alt="" />
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='shop-single-news'>
              <h2>Newspaper</h2>
              <p><span>★★★★☆</span>(25 customer reviews)</p>
              <h4><span>$340.00</span>$380.00</h4>
              <p className='para-shop-single'>There are many or randomised words which don't look even slightly believable.</p>
              <li>Going through the cites of the word in classNameical.</li>
              <li>There are many variations of passages.</li>
              <button>Add to cart</button>
              <div className='tag-para-2'>
                <p><span>Categories:</span>Book</p>
                <p><span>Tags:</span>Vote, Election, Political</p>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className='container shop-single-tab'>
        <button onClick={() => setabc('tab1')} className={abc1 == 'tab1' ? 'shopsingle-active' : 'none'}>Description</button>

        <button onClick={() => setabc('tab2')} className={abc1 == 'tab2' ? 'shopsingle-active' : 'none'}>Review</button>
      </div>



      <div className='container tab-para-shop-single'>
        <div style={{ display: abc1 == 'tab1' ? 'block' : 'none' }}>
        <p>Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him. <br /><br /> The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of himSamsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
      </div>

      <div style={{ display: abc1 == 'tab2' ? 'block' : 'none' }}>
        
        <div>
          <div className='row'>
            <div className='col-lg-11 mx-auto review-shop-single'>
          <h2>Add a review</h2>
          <p>Your email address will not be published. Required fields are marked *</p>
          <span>Your rating *</span><br />
          <span style={{fontSize:'30px',color:'lightgray'}}>★★★★★</span><br />
              <input type="text" className='w-100' placeholder='Name*'  /><br />
              <input type="email"  className='w-100' placeholder='Email*' /><br />
              <textarea placeholder='Review*'  className='w-100'></textarea>
              <button>Post Review</button>
            </div>  
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Shopsingle;
