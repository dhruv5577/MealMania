import { useContext } from 'react'
import classes from './OrderPlace.module.css'
import { StoreContext } from '../../Store/StoreContext'


export default function OrderPlace() {

  const {cartAmount}=useContext(StoreContext);

  return (
    <form className={classes.orderplace}>
      <div className={classes.left}>
          <p className={classes.title}>Customer Information</p>
          <div className={classes.feilds}>
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='Street'/>
          <div className={classes.feilds}>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State'/>
          </div>
          <div className={classes.feilds}>
            <input type="text" placeholder='Zip Code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='phone no' />
      </div>  
      <div className={classes.right}> 
      <div className={classes.total}>
          <h2>Order Total</h2>
          <div className={classes.box}>
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
          <button>Payment</button>
        </div>
      </div>

    </form>
  )
}
