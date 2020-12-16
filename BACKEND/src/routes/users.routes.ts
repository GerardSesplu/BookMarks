import { Router } from 'express';
import { userControllers } from '../controllers/user.controllers';

class UsersRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', userControllers.index);
        this.router.get('/:email', userControllers.user);
        this.router.post('/', userControllers.create);
        this.router.put('/:id', userControllers.update);
        this.router.delete('/:id', userControllers.destroy);
    }
}

const usersRoutes = new UsersRoutes;
export default usersRoutes;