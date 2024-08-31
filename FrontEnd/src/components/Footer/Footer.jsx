import classes from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { assets } from "../../assets/assets";


function Footer() {
  return (
    <div className={classes.footer} id='footer'>
      <div className={classes.parts}>
        <div className={classes.left}>
        <img src={assets.logo} alt="Logo" className={classes.logo} />
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam qui optio totam eum cupiditate reiciendis nam, nesciunt quis sequi dolores aut numquam, molestias, eius officiis neque perferendis doloremque ipsam voluptates!</p>
          <div className={classes.icons}>
          <FaFacebook className={classes.img}/>
          <FaInstagram className={classes.img} />
          <FaXTwitter className={classes.img}/>
          </div>
        </div>
        <div className={classes.center}>
            <h2>MEALMANIA</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className={classes.right}>
          <h2>Address</h2>
          <ul>
            <li>+1-234-567-8912</li>
            <li>mealmania@meal.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className={classes.copyright}>
        Copyright 2024 © MealMania - All RIghts are Reserverd
      </p>
    </div>
  )
}

export default Footer
