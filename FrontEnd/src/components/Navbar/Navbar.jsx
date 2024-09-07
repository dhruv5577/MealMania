import {Link, useNavigate} from 'react-router-dom'
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import classes from './Navbar.module.css';
import { StoreContext } from '../../Store/StoreContext';
import { BiLogOut } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";



// eslint-disable-next-line react/prop-types
function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {cartAmount,token,setToken}=useContext(StoreContext)
  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem('token');
    setToken("");
    navigate("/");
  }

  return (
    <div className={classes.navbar}>
      <Link to='/'><img src={assets.logo} alt="Logo" className={classes.logo} /></Link>
      <ul className={classes.navbarMenu}>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? classes.active : ""}>Home</Link>
        <a href='#menu' onClick={() => setMenu("menu")} className={menu === "menu" ? classes.active : ""}>Menu</a>
        <a href='#footer' onClick={() => setMenu("about")} className={menu === "about" ? classes.active : ""}>About Us</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? classes.active : ""}>Contact Us</a>
      </ul>
      <div className={classes.navbarRight}>
        <FaSearch className={classes.img}/>
        <div className={classes.navbarSearchIcon}>
          <Link to='/cart'><FaShoppingCart /></Link>
          <div className={cartAmount()===0 ? "":classes.dot}></div>
        </div>
        {!token?
        <button onClick={()=>setShowLogin(true)} className={classes.button}>Sign In</button>
        :
          <div className={classes.navbarprofile}>
            <FaRegUserCircle />
            <ul className={classes.dropdown}>
              <li><FaShoppingCart className={classes.droplogo}/><p>Orders</p></li>
              <hr />
              <li onClick={logout}><BiLogOut className={classes.droplogo} /><p>LogOut</p></li>
            </ul>
            </div>
        }
        
      </div>
    </div>
  );
}

export default Navbar;

