import TaskModel from '../models/tasks.js';

const create = async (body) => TaskModel.create(body);
const find = async () => TaskModel.find();

export default {
  create,
  find,
};
