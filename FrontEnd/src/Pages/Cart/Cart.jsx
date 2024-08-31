import { useContext } from "react"
import { StoreContext } from "../../Store/StoreContext"
import classes from './Cart.module.css'
import { useNavigate } from "react-router-dom";


export default function Cart() {

  const {foodlist,cartItem,removeincart,cartAmount}=useContext(StoreContext);

  const navigate=useNavigate();

  return (
    <div className={classes.cart}>
      <div className={classes.item}>
        <div className={classes.title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {foodlist.map((item,index)=>{
          if(cartItem[item._id]>0){
            return (
              <div>
              <div className={classes.itemstitle}>
                <img src={item.image}></img>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹{item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeincart(item._id)} className={classes.logo}>x</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
      </div>
      <div className={classes.bottom}>
        <div className={classes.total}>
          <h2>Order Total</h2>
          <div>
            <div className={classes.totaldetails}>
              <p>SubTotal</p>
              <p>₹{cartAmount()}</p>
            </div>
            <hr/>
            <div className={classes.totaldetails}>
            <p>Delivery Charges</p>
            <p>₹{cartAmount()===0?0:45}</p>
            </div>
            <hr/>
            <div className={classes.totaldetails}>
              <b>Total</b>
              <b>₹{cartAmount()===0?0:cartAmount()+45}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/orders')}>CheckOut</button>
        </div>
        <div className={classes.promocode}>
          <div>
            <p>Enter Your PromoCode Here</p>
            <div className={classes.promoinput}>
              <input type="text" placeholder="PromoCode" />
              <button> Submit </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
