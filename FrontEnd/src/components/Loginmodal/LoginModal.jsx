import { useState } from 'react'
import classes from './loginmodal.module.css'
import { ImCross } from "react-icons/im";
import PropTypes from 'prop-types';


export default function LoginModal({setShowLogin}) {

  const [currVal,setCurrVal]=useState("Sign Up");

  return (
    <div className={classes.container}>
      <form className={classes.modalcontainer}>
        <div className={classes.titlemodal}>
          <h2> {currVal} </h2>
          <ImCross onClick={()=>setShowLogin(false)} />
        </div>
        <div className={classes.login_input}>
          {currVal==='Login'?<></>:<input type="text" placeholder='Name' required/>}
          <input type="email" placeholder='Email' required/>
          <input type="password" placeholder='Password' required/>
          
        </div>
        <button> {currVal==='Sign Up'?"Create Account":"Login"}</button>
        <div className={classes.condition}>
          <input type="checkbox" required />
          <p>Agreed to Terms and Condition</p>
        </div>
        {currVal==='Login' ? <p>Create a new Account? <span  onClick={()=>setCurrVal("Sign Up")}>Click Here</span></p>:<p>Already have Acoount? <span onClick={()=>setCurrVal("Login")}>Login Here</span></p> }
        
        
      </form>
    </div>
  )
}

LoginModal.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};