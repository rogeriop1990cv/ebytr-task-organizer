import express from 'express';
import tasksRouter from '../router/tasks.js';

const app = express();

app.use(express.json());

app.use(tasksRouter);

app.get('/status', (req, res) => {
  res.send('ok');
});

export default app;
