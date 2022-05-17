import TaskModel from '../models/tasks.js';

const create = async (body) => TaskModel.create(body);
const find = async () => TaskModel.find();
const findOne = async (id) => TaskModel.findOne(id);

export default {
  create,
  find,
  findOne,
};
