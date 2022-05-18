import TaskModel from '../model/tasks.js';

const create = async (body) => TaskModel.create(body);
const find = async () => TaskModel.find();
const findOne = async (id) => TaskModel.findOne(id);
const update = async (id) => TaskModel.updateOne(id);
const destroy = async (id) => TaskModel.deleteOne(id);

export default {
  create,
  find,
  findOne,
  update,
  destroy,
};
