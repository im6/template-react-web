import express from 'express';
import render from './render';

const app = express();
app.use('/static', express.static('local/public'));
app.get('/api/todos', (_, req) => {
  req.send([
    { id: 0, name: 'do 0' },
    { id: 1, name: 'do 1' },
    { id: 2, name: 'do 2' },
  ]);
});
app.get('*', render);

export default app;
