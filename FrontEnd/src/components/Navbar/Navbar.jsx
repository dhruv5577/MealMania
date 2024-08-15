import { assets } from "../../assets/assets"
import './Navbar.css'


function Navbar() {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo"></img>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar">
      <img src={assets.search}/>
      <div className="navbar-search-icon">
      <img src={assets.search}/>
      <div className="dot"></div>
      </div>
      <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
