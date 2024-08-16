import { useContext } from 'react'
import classes from './Display.module.css'
import { StoreContext } from '../../Store/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const Display=()=> {

  const {foodlist}=useContext(StoreContext)

  return (
    <div className={classes.food}>
      <h2>Top Dishes Around You</h2>
      <div className={classes.displaylist}>
        {foodlist.map((item,index)=>{
          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
        })}
      </div>
    </div>
  )
}


export default  Display