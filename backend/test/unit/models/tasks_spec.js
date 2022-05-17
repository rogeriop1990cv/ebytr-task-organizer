import mongoose from 'mongoose';
import { expect } from 'chai';
import TaskModel from '../../../src/models/tasks.js';
import connection from '../../../database/connection.js';

describe('Testa o Model', () => {
  beforeEach(async () => {
    await connection('test');
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it('Test if it creates a new record in the database', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    const queryResult = await TaskModel.create(mockDate);

    expect(mockDate.description).to.deep.equal(queryResult.description);
    expect(mockDate.description).to.deep.equal(queryResult.description);
  });
});
