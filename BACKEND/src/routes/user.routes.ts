import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers';

class UserRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/:id', userControllers.userById);
        
    }
}

const userRoutes = new UserRoutes;
export default userRoutes;