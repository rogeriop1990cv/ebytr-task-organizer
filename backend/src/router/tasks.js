import { Router } from 'express';
import TasksController from '../controller/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/', TasksController.get);
tasksRouter.post('/', TasksController.post);
tasksRouter.put('/:id', TasksController.put);
tasksRouter.delete('/:id', TasksController.destroy);

export default tasksRouter;
