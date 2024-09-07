import {  useContext, useState } from 'react'
import classes from './loginmodal.module.css'
import { ImCross } from "react-icons/im";
import PropTypes from 'prop-types';
import { StoreContext } from '../../Store/StoreContext';
import axios from 'axios'


export default function LoginModal({setShowLogin}) {

  const {URI,setToken}=useContext(StoreContext);

  
  const login=async(e)=>{
    e.preventDefault()
    let newURI=URI;

    if(currVal==='Login'){
      newURI+="/api/v1/user/login"
    }
    else{
      newURI+="/api/v1/user/register"
    }

    const response = await axios.post(newURI,userData)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  

  }

  const [currVal,setCurrVal]=useState("Sign Up");
  const[userData,setUserData]=useState({
    name:"",
    email:"",
    password:""
  })

  // useEffect(()=>{

  // },[userData])

  const onchangehanlde=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData(userData=>({...userData,[name]:value}))
  }

  return (
    <div className={classes.container}>
      <form onSubmit={login} className={classes.modalcontainer}>
        <div className={classes.titlemodal}>
          <h2> {currVal} </h2>
          <ImCross className={classes.image} onClick={()=>setShowLogin(false)} />
        </div>
        <div className={classes.login_input}>
          {currVal==='Login'?<></>:<input name='name' onChange={onchangehanlde} value={userData.name} type="text" placeholder='Name' required/>}
          <input name='email' onChange={onchangehanlde} value={userData.email} type="email" placeholder='Email' required/>
          <input name='password' onChange={onchangehanlde} value={userData.password} type="password" placeholder='Password' required/>
          
        </div>
        <button type='submit'> {currVal==='Sign Up'?"Create Account":"Login"}</button>
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