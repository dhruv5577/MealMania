import classes from './Menu.module.css'
import { list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
export default function Menu({category,setCategory}) {
  return (
    <div className={classes.menu} id='menu'>
      <h1>CheckOut This Menu</h1>
      <p className={classes.menutext}>{`Craving something delicious? Satisfy your hunger with just a few clicks! Explore a world of flavors and have your favorite dishes delivered hot and fresh to your door. Whether it's a quick snack or a hearty meal, we've got you covered. Order now and indulge in the taste you love!`}</p>
      <div className={classes.list}>
        {list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={index} className={classes.listitem}>
              <img className={category===item.name?classes.active : ""} src={item.image}/>
              <p>
                {item.name}
              </p>
              
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}
