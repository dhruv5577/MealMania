
import { useContext } from 'react';
import classes from './FoodItem.module.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { CgAdd } from "react-icons/cg";
import { FiMinusCircle } from "react-icons/fi";
import { StoreContext } from '../../Store/StoreContext';

// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,price,description,image}) => {

  //const [itemcnt,setItemcnt]=useState(0);
  // const {cartItem,addtocart,removeincart}=useContext(StoreContext)
  const {cartItem,addtocart,removeincart}=useContext(StoreContext)

  return (
    <div className={classes.fooditem}>
      <div className={classes.imagecontainer}>
        <img className={classes.foodimage} src={image} alt="" />
        {
          !cartItem[id]?<IoMdAdd className={classes.add} onClick={()=>addtocart(id)} />
          :
          <div className={classes.itemcounter}>
             {/* img */}
             <FiMinusCircle onClick={()=>removeincart(id)} />
             <p>{cartItem[id]}</p>
             <CgAdd onClick={()=>addtocart(id)}/>
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
