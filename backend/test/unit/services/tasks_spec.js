import { assert, expect } from 'chai';
import Sinon from 'sinon';
import TaskService from '../../../src/services/tasks.js';
import TaskModel from '../../../src/models/tasks.js';

describe('Task Service Unit Testing', () => {
  it('Test if it TaskModel exist', async () => {
    assert.exists(TaskService, 'TaskModel is neither `null` nor `undefined`');
  });

  it('Test if it create a new record in the database', async () => {
    const mockDate = {
      description: 'a simple description for the test of creating a new record in the database',
    };

    Sinon.stub(TaskModel, 'create').resolves(mockDate);
    const queryResult = await TaskService.create(mockDate);

    expect(mockDate.description).to.deep.equal(queryResult.description);
    Sinon.restore();
  });
});
