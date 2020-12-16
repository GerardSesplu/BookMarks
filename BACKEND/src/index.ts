import express from 'express';
import usersRoutes from './routes/users.routes';
import userRoutes from './routes/user.routes';
import booksRoutes from './routes/books.routes';

const app = express();

app.set('port', 3000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

app.use('/users', usersRoutes.router);
app.use('/user', userRoutes.router);
app.use('/books', booksRoutes.router);

app.listen(app.get('port'), () => {
    console.log('server is running on port 3000');
});



