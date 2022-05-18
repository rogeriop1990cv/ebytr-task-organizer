import { Router } from 'express';
import TasksController from '../controller/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/', TasksController.get);

export default tasksRouter;
