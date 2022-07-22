import mongoose from 'mongoose';

async function connection(database = 'task') {
  return mongoose.connect(process.env.DB || `mongodb://localhost:27017/${database}`);
}

export default connection;
