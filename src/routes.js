import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

// import User from './app/models/User';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/files', upload.single('file'), FileController.store);

});

// routes.delete();
// routes.put();

export default routes;
