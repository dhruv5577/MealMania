import { createContext } from "react";
import { foodlist } from "../assets/assets";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

  const contextValue={
    foodlist
  }

  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider