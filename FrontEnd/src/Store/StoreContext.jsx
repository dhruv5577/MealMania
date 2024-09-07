/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

  const [cartItem,setCartItem]=useState({})
  const URI=import.meta.env.VITE_SERVER_URI;
  const[token,setToken]=useState('');

  const[foodlist,setFoodList]=useState([])

  const addtocart=(itemId)=>{
    if(!cartItem[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  } 


  const removeincart=(itemId)=>{
    
    
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
  } 

  const cartAmount=()=>{
    let total=0;
    for(const i in cartItem){

      if(cartItem[i]>0){
        let info=foodlist.find((p)=>p._id===i);
      total+=info.price*cartItem[i]
      }      
    }
    return total;
  }

  const fetchfood=async()=>{
    const response=await axios.get(URI+"/api/v1/food/lists");

    setFoodList(response.data.data)
  }

  useEffect(()=>{
    
    async function load(){
      await fetchfood();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    load()
  },[])


  const contextValue={
    foodlist,
    cartAmount,
    cartItem,
    setCartItem,
    addtocart,
    removeincart,
    URI,
    token,setToken
  }

  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider