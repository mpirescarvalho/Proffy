import express, { NextFunction, Request, Response } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

const routes = express.Router();

const classesController = new ClassesController();
const connectionController = new ConnectionsController();
const userController = new UserController();
const sessionController = new SessionController();

routes.post('/session', sessionController.create);

routes.use(authMiddleware);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

routes.get('/users/:id', userController.show);
routes.post('/users', userController.create);

export default routes;
