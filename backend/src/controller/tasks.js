import TaskService from '../service/tasks.js';

const get = async (_req, res) => {
  try {
    const allTasks = await TaskService.find();
    return res.status(200).json(allTasks);
  } catch (error) {
    return res.status(400).json({ message: 'Error database' });
  }
};

const post = async (req, res) => {
  try {
    const createdTasks = await TaskService.create(req.body);
    return res.status(201).json(createdTasks);
  } catch (error) {
    return res.status(400).json({ message: 'Error database' });
  }
};

const put = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.update(id, req.body);
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({ message: 'Error database' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.destroy(id);
    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error database' });
  }
};

export default {
  get,
  post,
  put,
  destroy,
};
