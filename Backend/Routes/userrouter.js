import express from 'express';
import userctrl from '../Controllers/userctrl.js';

const UserRouter=express.Router();


//*account registration router
UserRouter.post('/api/v1/user/register',userctrl.register);

//*Login router
UserRouter.post('/api/v1/user/login',userctrl.login);

export default UserRouter;