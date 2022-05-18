import TaskService from '../service/tasks.js';

const get = async (req, res) => {
  try {
    const allTasks = await TaskService.find();
    return res.status(200).json(allTasks);
  } catch (error) {
    return res.status(400).json({ message: 'Error database' });
  }
};

export default {
  get,
};
