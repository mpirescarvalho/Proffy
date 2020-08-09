import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionController = new ConnectionsController();
const userController = new UserController();
const sessionController = new SessionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

routes.post('/users', userController.create);

routes.post('/session', sessionController.create);

export default routes;
