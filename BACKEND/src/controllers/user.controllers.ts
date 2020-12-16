import { Request, Response } from 'express';
import { Users } from '../models/Users';

class UserControllers {

    public async index (req: Request, res: Response) {

        try {

            const users = await Users.findAll({ raw: true })
            res.send(users)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async user (req: Request, res: Response) {

        try {

            const user = await Users.findAll({
                where: {
                    email: req.params.email
                }
            });
            console.log('servicio funcionando');
            res.send(user)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async userById (req: Request, res: Response) {

        try {

            const userById = await Users.findAll({
                where: {
                    id: req.params.id
                }
            });
            console.log('servicio funcionando');
            res.send(userById)

        } catch (error) {

            console.log(error);
            res.sendStatus(500);

        }
    }

    public async create (req: Request, res: Response) {

        try {

            const params = req.body;
            const newUser = await Users.create(params);
            res.send(newUser);

        } catch (error) {

            console.log(error);
            res.sendStatus(500);
        }
    }

    public async update (req: Request, res: Response) {

        try{

            const updateUser = await Users.update(
                {

                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    genero: req.body.genero

                },
                { where: { id: req.params.id }
            });
            res.json(updateUser)
        }
        catch (error){

            res.send(error);

        }
    }

    public async destroy (req: Request, res: Response) {

        try{

            await Users.destroy({
                where: {
                    id: req.params.id
                }
            });
            const users = await Users.findAll({ raw: true })
            res.send(users);

        }
        catch(error){

            res.json(error);

        }
    }
}

export let userControllers = new UserControllers();
