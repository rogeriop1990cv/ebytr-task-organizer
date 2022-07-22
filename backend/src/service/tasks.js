import TaskModel from '../model/tasks.js';

const create = async (body) => TaskModel.create(body);
const find = async () => TaskModel.find();
const findOne = async (id) => TaskModel.findOne(id);
const update = async (id, body) => TaskModel.updateOne({ _id: id }, body);
const destroy = async (id) => TaskModel.deleteOne({ _id: id });

export default {
  create,
  find,
  findOne,
  update,
  destroy,
};
