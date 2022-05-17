import mongoose from 'mongoose';
import tasks from '../schema/tasks.js';

const Task = mongoose.model('Tasks', tasks);

export default Task;
