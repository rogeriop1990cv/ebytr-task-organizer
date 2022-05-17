import TaskModel from '../models/tasks.js';

const create = async (body) => TaskModel.create(body);
const find = async () => TaskModel.find();
const findOne = async (id) => TaskModel.findOne(id);
const update = async (id) => TaskModel.updateOne(id);

export default {
  create,
  find,
  findOne,
  update,
};
