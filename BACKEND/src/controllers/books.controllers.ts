import { Request, Response } from 'express';
import { FavouriteBooks } from '../models/FavouriteBooks';
import { ReadedBooks } from '../models/ReadedBooks';
import { ToReadBooks } from '../models/ToReadBooks';

class BooksControllers {

    public async favIndex (req: Request, res: Response) {

        try {

            const users = await FavouriteBooks.findAll({
                where: {
                    userId: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async favPost (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await FavouriteBooks.create(params)
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async favDestroy (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await FavouriteBooks.destroy({
                where : {
                    id: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async readIndex (req: Request, res: Response) {

        try {

            const users = await ReadedBooks.findAll({
                where: {
                    userId: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async readPost (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await ReadedBooks.create(params)
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async readDestroy (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await ReadedBooks.destroy({
                where : {
                    id: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }
    
    public async toReadIndex (req: Request, res: Response) {

        try {

            const users = await ToReadBooks.findAll({
                where: {
                    userId: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async toReadPost (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await ToReadBooks.create(params)
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async toReadDestroy (req: Request, res: Response) {

        try {

            const params = req.body
            const users = await ToReadBooks.destroy({
                where : {
                    id: req.params.id
                }
            })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }
}

export let booksControllers = new BooksControllers();
