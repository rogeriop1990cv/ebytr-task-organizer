import mongoose from 'mongoose';
import { assert, expect } from 'chai';
import TaskModel from '../../../src/models/tasks.js';
import connection from '../../../database/connection.js';

describe('Task Model Unit Testing', () => {
  beforeEach(async () => {
    await connection('test');
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it('Test if it TaskModel exist', async () => {
    assert.exists(TaskModel, 'TaskModel is neither `null` nor `undefined`');
  });

  it('Test if it create a new record in the database', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    const queryResult = await TaskModel.create(mockDate);

    expect(mockDate.description).to.deep.equal(queryResult.description);
  });

  it('Test find function returns a list with all records', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    await TaskModel.create(mockDate);
    await TaskModel.create(mockDate);
    await TaskModel.create(mockDate);

    const queryResult = await TaskModel.find({});

    expect(queryResult).to.length(3);
  });

  it('Test findById function returns one record', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    const { id } = await TaskModel.create(mockDate);
    await TaskModel.create({});

    const queryResult = await TaskModel.findById(id);
    expect([queryResult]).to.length(1);
    expect(mockDate.description).to.deep.equal(queryResult.description);
  });

  it('test if the delete function deletes a record', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    const { id } = await TaskModel.create(mockDate);
    await TaskModel.create(mockDate);

    await TaskModel.deleteOne({ id });
    const queryAllResult = await TaskModel.find();

    expect(queryAllResult).to.length(1);
  });

  it('Test Update', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };
    const { id } = await TaskModel.create(mockDate);
    await TaskModel.updateOne({ id }, { description: 'Update' });
    const queryAllResult = await TaskModel.findOne({ id });

    expect('Update').to.deep.equal(queryAllResult.description);
  });
});
