import mongoose from 'mongoose';

async function connection() {
  return mongoose.connect('mongodb://localhost:27017/task');
}

export default connection;
