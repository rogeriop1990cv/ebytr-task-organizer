import app from './app.js';
import connection from '../../database/connection.js';

const port = 3001;

app.listen(port, async () => {
  await connection();
  console.log(`Server Up http://localhost:${port}/`);
});
