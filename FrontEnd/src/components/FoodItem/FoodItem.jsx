
import { useState } from 'react';
import classes from './FoodItem.module.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const FoodItem = ({name,price,description,image}) => {

  const [itemcnt,setItemcnt]=useState(0);

  return (
    <div className={classes.fooditem}>
      <div className={classes.imagecontainer}>
        <img className={classes.foodimage} src={image} alt="" />
        {
          !itemcnt?<IoMdAdd className={classes.add} onClick={()=>setItemcnt(prev=>prev+1)} />
          :
          <div className={classes.itemcounter}>
             {/* img */}
             <FiMinusCircle onClick={()=>setItemcnt(prev=>prev-1)} />
             <p>{itemcnt}</p>
             <CgAdd onClick={()=>setItemcnt(prev=>prev+1)}/>
          </div>
        }
      </div>
      <div className={classes.fooditeminfo}>
        <div className={classes.itemnamerating}>
          <p>{name}</p>
          <MdOutlineStarPurple500 />
        </div>
          <p className={classes.itemdesc}> {description} </p>
          <p className={classes.itemprice}>
          ₹{price}
          </p>
        </div>
      </div>
    
  )
}

export default FoodItem
