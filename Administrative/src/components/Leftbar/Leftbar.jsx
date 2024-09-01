import classes from './Leftbar.module.css';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Leftbar() {
  return (
    <div className={classes.left}>
      <div className={classes.options}>
        <NavLink
          to='/add'
          className={({ isActive }) =>
            isActive ? `${classes.option} ${classes.active}` : classes.option
          }
        >
          <IoMdAdd />
          <p>Add Item</p>
        </NavLink>
        <NavLink
          to='/list'
          className={({ isActive }) =>
            isActive ? `${classes.option} ${classes.active}` : classes.option
          }
        >
          <MdOutlineAddShoppingCart />
          <p>List Item</p>
        </NavLink>
        <NavLink
          to='/order'
          className={({ isActive }) =>
            isActive ? `${classes.option} ${classes.active}` : classes.option
          }
        >
          <MdOutlineAddShoppingCart />
          <p>Order Item</p>
        </NavLink>
      </div>
    </div>
  );
}
