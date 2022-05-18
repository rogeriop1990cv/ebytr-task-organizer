import mongoose from 'mongoose';

async function connection(database = 'task') {
  return mongoose.connect(`mongodb://localhost:27017/${database}`);
}

export default connection;
