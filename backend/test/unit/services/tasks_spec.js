import { assert, expect } from 'chai';
import Sinon from 'sinon';
import TaskService from '../../../src/services/tasks.js';
import TaskModel from '../../../src/models/tasks.js';

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
});
