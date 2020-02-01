import { Router } from 'express';
// import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Rods',
//     email: 'rodolfo.venancio@gmail.com',
//     password_hash: 'loremipsum',
//   });

//   return res.json(user);
// });

// routes.get();
routes.post('/users', UserController.store);
// routes.delete();
// routes.put();

export default routes;
