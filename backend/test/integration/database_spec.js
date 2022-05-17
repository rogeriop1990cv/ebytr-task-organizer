import { expect } from 'chai';
import mongoose from 'mongoose';
import connection from '../../database/connection.js';

describe('Testa o Banco de Dados', () => {
  after(() => {
    mongoose.disconnect();
  });

  it('Test if the database is connected', async () => {
    await connection();
    expect(1).to.be.equal(mongoose.connection.readyState);
  });
});
