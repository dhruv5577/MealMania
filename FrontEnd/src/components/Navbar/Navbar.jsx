
import { useState } from "react";
import { assets } from "../../assets/assets";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import classes from './Navbar.module.css';

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className={classes.navbar}>
      <img src={assets.logo} alt="Logo" className={classes.logo} />
      <ul className={classes.navbarMenu}>
        <li onClick={() => setMenu("home")} className={menu === "home" ? classes.active : ""}>Home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? classes.active : ""}>Menu</li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? classes.active : ""}>About Us</li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? classes.active : ""}>Contact Us</li>
      </ul>
      <div className={classes.navbarRight}>
        <FaSearch />
        <div className={classes.navbarSearchIcon}>
          <FaShoppingCart />
          <div className={classes.dot}></div>
        </div>
        <button className={classes.button}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;

