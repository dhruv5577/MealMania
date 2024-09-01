import classes from './Navbar.module.css'
import { CgProfile } from "react-icons/cg";


export default function Navbar() {
  return (
    <>
    <div className={classes.navbar}>
    <h3>Admin</h3>
      {/* <img className={classes.image} src={assets.logo} alt="" /> */}
      <CgProfile className={classes.profile}/>
    </div>
    </>
  )
}
