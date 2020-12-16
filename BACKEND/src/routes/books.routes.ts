import { Router } from 'express';
import { booksControllers } from '../controllers/books.controllers';

class UserRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/favourites/:id', booksControllers.favIndex);
        this.router.post('/favourites', booksControllers.favPost);
        this.router.delete('/favourites/:id', booksControllers.favDestroy);

        this.router.get('/readed/:id', booksControllers.readIndex);
        this.router.post('/readed', booksControllers.readPost);
        this.router.delete('/readed/:id', booksControllers.readDestroy);

        this.router.get('/toread/:id', booksControllers.toReadIndex);
        this.router.post('/toread', booksControllers.toReadPost);
        this.router.delete('/toread/:id', booksControllers.toReadDestroy);
        
    }
}

const userRoutes = new UserRoutes;
export default userRoutes;