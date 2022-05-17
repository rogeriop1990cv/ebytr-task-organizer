import mongoose from 'mongoose';

const tasks = new mongoose.Schema({
  description: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: 'Pendente',
  },
});

export default tasks;
