import { expect } from 'chai';
import Sinon from 'sinon';
import TaskController from '../../../src/controller/tasks.js';
import TaskService from '../../../src/service/tasks.js';

const mockResultGet = [{
  _id: '62833332ac5fa02948326758',
  description: 'a simple description for the test of creating a new record in the database',
  status: 'Pendente',
  createAt: '2022-05-17T05:31:30.732Z',
  __v: 0,
}];

const mockResultPost = mockResultGet[0];

const mockResultBody = {
  description: 'a simple description for the test of creating a new record in the database',
  status: 'Pendente',
  createAt: '2022-05-17T05:31:30.732Z',
};

const mockResponse = () => {
  const res = {};
  res.status = Sinon.stub().returns(res);
  res.json = Sinon.stub().returns(res);
  return res;
};

describe('Task Controller Unit Testing', () => {
  it('should "GET /" method return all task', async () => {
    Sinon.stub(TaskService, 'find').resolves(mockResultGet);
    const req = { };
    const res = mockResponse();

    await TaskController.get(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mockResultGet)).to.be.equal(true);
    Sinon.restore();
  });

  it('should "POST /" method return one task', async () => {
    Sinon.stub(TaskService, 'create').resolves(mockResultPost);
    const req = { body: mockResultBody };
    const res = mockResponse();

    await TaskController.post(req, res);

    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith(mockResultPost)).to.be.equal(true);
    Sinon.restore();
  });

  it('should "PUT /:id" method return status 200', async () => {
    Sinon.stub(TaskService, 'update').resolves({});
    const req = { body: mockResultBody, params: { id: 1 } };
    const res = mockResponse();

    await TaskController.put(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    Sinon.restore();
  });

  it('should "DELETE /:id" method return 200', async () => {
    Sinon.stub(TaskService, 'destroy').resolves({});
    const req = { params: { id: 1 } };
    const res = mockResponse();

    await TaskController.destroy(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    Sinon.restore();
  });
});
