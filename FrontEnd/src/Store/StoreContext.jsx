/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { foodlist } from "../assets/assets";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

  const [cartItem,setCartItem]=useState({})

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




  const contextValue={
    foodlist,
    cartAmount,
    cartItem,
    setCartItem,
    addtocart,
    removeincart
  }

  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider