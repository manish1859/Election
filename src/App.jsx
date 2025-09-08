import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home1 from './pages/home/Home1'
import Home2 from './pages/home/Home2'
import Home3 from './pages/home/Home3'
import Home4 from './pages/home/Home4'
import About from './pages/about/About'
import Event from './pages/eventt/Event'
import Eventsingal from './pages/eventt/Eventsingal'
import Gallery from './pages/Pages/Gallery'
import Volunteer from './pages/Pages/Volunteer'
import Testimonial from './pages/Pages/Testimonial'
import Team from './pages/Pages/Team'
import Teamsngile from './pages/Pages/Teamsngile'
import Servicestyle1 from './pages/Pages/Servicestyle1'
import Servicestyle2 from './pages/Pages/Servicestyle2'
import Shop from './pages/Pages/Shop'
import ShopSingle from './pages/Pages/ShopSingle'
import Cart from './pages/Pages/Cart'
import Checkout from './pages/Pages/Checkout'
import Faq from './pages/Pages/Faq'
import Login from './pages/Pages/Login'
import Resgister from './pages/Pages/Resgister'
import Blogleft from './pages/Blog/Blogleft'
import Blogright from './pages/Blog/Blogright'
import Fullwidth from './pages/Blog/Fullwidth'
import Deatilsleft from './pages/Blog/Deatilsleft'
import Deatilsright from './pages/Blog/Deatilsright'
import Deatailsfullwidth from './pages/Blog/Deatailsfullwidth'
import Forgot from './pages/Pages/Forgot'
import Error from './pages/Pages/Error'
import Contact from './pages/Contact/Contact'
import Donate from './pages/Donate/Donate'
import Footer from './Footer'


const App = () => {

  return (
    <div>
      <Header />
      <Routes >
        <Route path='/' element={<Home1/>} />
        <Route path='/home-2' element={<Home2/>} />
        <Route path='/home-3' element={<Home3/>} />
        <Route path='/home-4' element={<Home4/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/events' element={<Event/>} />
        <Route path='/events/single' element={<Eventsingal/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/volunteer' element={<Volunteer/>} />
        <Route path='/testimonial'element={<Testimonial/>}/>
        <Route path='/team'element={<Team/>}/>
        <Route path='/team-single'element={<Teamsngile/>}/>
        <Route path='/service1'element={<Servicestyle1/>}/>
        <Route path='/service2'element={<Servicestyle2/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/single' element={<ShopSingle/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Resgister/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/404/error' element={<Error/>}/>
        <Route path='/blogright' element={<Blogright/>}/>
        <Route path='/blogleft' element={<Blogleft/>}/>
        <Route path='/fullwidth' element={<Fullwidth/>}/>
        <Route path='/detailsright' element={<Deatilsright/>}/>
        <Route path='/blog-single/Letraset-Sheets-Passage-And-Recently' element={<Deatilsleft/>}/>
        <Route path='/blog-single-fullwidth/Letraset-Sheets-Passage-And-Recently' element={<Deatailsfullwidth/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/donate' element={<Donate/>} />
      </Routes>
     <Footer/>

    </div>
  )
}

export default App
