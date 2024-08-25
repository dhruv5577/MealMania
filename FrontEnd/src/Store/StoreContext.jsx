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




  const contextValue={
    foodlist,
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