import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use(authMiddleware);
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Rods',
//     email: 'rodolfo.venancio@gmail.com',
//     password_hash: 'loremipsum',
//   });

//   return res.json(user);
// });

routes.get('/', (req, res) => res.json({ get_teste: 'test' }));
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', UserController.update);
// routes.delete();
// routes.put();

export default routes;
