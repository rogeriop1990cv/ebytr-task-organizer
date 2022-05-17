import TaskModel from '../models/tasks.js';

const create = async (body) => TaskModel.create(body);

export default {
  create,
};
