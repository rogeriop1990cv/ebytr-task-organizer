import { assert, expect } from 'chai';
import Sinon from 'sinon';
import TaskService from '../../../src/service/tasks.js';
import TaskModel from '../../../src/model/tasks.js';

describe('Task Service Unit Testing', () => {
  it('Test if it TaskModel exist', async () => {
    assert.exists(TaskService, 'TaskModel is neither `null` nor `undefined`');
  });

  it('Test if it create method a new record in the database', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    const queryResult = await TaskService.create(mockDate);

    expect(mockDate.description).to.deep.equal(queryResult.description);
    Sinon.restore();
  });

  it('Test if the find method lists all records', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    Sinon.stub(TaskModel, 'find').resolves([{}]);

    const queryResult = await TaskService.find(mockDate);

    assert.isArray(queryResult, 'Return must be an Array of objects');
    Sinon.restore();
  });

  it('Test if the findOne method one records', async () => {
    const mockDate = {
      id: 10,
      description: 'a simple description for the test of creating a new record in the database',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    Sinon.stub(TaskModel, 'findOne').resolves([mockDate]);

    const queryResult = await TaskService.findOne(mockDate.id);

    expect(queryResult).length(1);
    expect(10).to.be.equal(queryResult[0].id);
    Sinon.restore();
  });

  it('Test if the update method', async () => {
    const mockDate = {
      id: 10,
      description: 'a simple description for the test of creating a new record in the database',
    };

    const mockDateUpdate = {
      id: 10,
      description: 'Update',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    Sinon.stub(TaskModel, 'findOne').resolves(mockDateUpdate);
    Sinon.stub(TaskModel, 'updateOne').resolves({});

    const queryResult = await TaskService.update(mockDate.id, mockDateUpdate);
    const queryResultOne = await TaskService.findOne(mockDate.id);

    expect([queryResult]).length(1);
    expect(queryResultOne.description).to.be.equal(mockDateUpdate.description);
    Sinon.restore();
  });

  it('Test if the destroy method', async () => {
    const mockDate = {
      id: 10,
      description: 'a simple description for the test of creating a new record in the database',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    Sinon.stub(TaskModel, 'findOne').resolves([]);
    Sinon.stub(TaskModel, 'deleteOne').resolves({});

    await TaskService.create(mockDate);
    await TaskService.destroy(mockDate.id);
    const queryResultOne = await TaskService.findOne(mockDate.id);

    expect(queryResultOne).length(0);
    Sinon.restore();
  });
});
