
import { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import LoginModal from '../../components/Loginmodal/LoginModal';

export default function Root() {

  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin && <LoginModal setShowLogin={setShowLogin}/>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin}/>
     <main>
      <Outlet/>
    </main> 
    <Footer/>
    </div>
    </>
  )
}

