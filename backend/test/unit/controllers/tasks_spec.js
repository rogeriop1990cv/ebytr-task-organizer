import { expect } from 'chai';
import Sinon from 'sinon';
import TaskController from '../../../src/controller/tasks.js';
import TaskService from '../../../src/service/tasks.js';

const mockResultGet = {
  _id: '62833332ac5fa02948326758',
  description: 'a simple description for the test of creating a new record in the database',
  status: 'Pendente',
  createAt: '2022-05-17T05:31:30.732Z',
  __v: 0,
};

describe('Task Controller Unit Testing', () => {
  it('should get method return all task', async () => {
    Sinon.stub(TaskService, 'find').resolves(mockResultGet);
    const req = {};
    const mockResponse = () => {
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(res);
      return res;
    };

    const res = mockResponse();

    await TaskController.get(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mockResultGet)).to.be.equal(true);
  });
});
