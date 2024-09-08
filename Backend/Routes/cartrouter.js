import express from 'express';
import cartctrl from '../Controllers/cartctrl.js';

const CartRouter=express.Router();


CartRouter.post('/api/v1/cart/addtocart',cartctrl.addtocart);

CartRouter.post('/api/v1/cart/removefromcart',cartctrl.removefromcart);

CartRouter.get('/api/v1/cart/getcartdata',cartctrl.getallcart);

export default CartRouter;