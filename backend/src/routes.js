import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FIleController';
import MeetupController from './app/controllers/MeetupController';
import OwnMeetController from './app/controllers/OwnMeetController';

import SubscriptionsController from './app/controllers/SubscriptionsController';

import authMiddlewares from './app/Middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.post('/meetups', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetups/:id', MeetupController.update);
routes.delete('/meetups/:id', MeetupController.delete);

routes.post('/meetups/:meetupId/subs', SubscriptionsController.store);

routes.get('/subs/:id', SubscriptionsController.index);
routes.delete('/subs/:id', SubscriptionsController.delete);
routes.get('/organizing', OwnMeetController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
