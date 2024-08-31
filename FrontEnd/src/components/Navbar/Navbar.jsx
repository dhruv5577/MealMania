import {Link} from 'react-router-dom'
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import classes from './Navbar.module.css';
import { StoreContext } from '../../Store/StoreContext';


// eslint-disable-next-line react/prop-types
function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const {cartAmount}=useContext(StoreContext)

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
        <button onClick={()=>setShowLogin(true)} className={classes.button}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;

