import express from 'express';
import render from './render';
import { STATIC_URL } from '../constant';

const app = express();
app.use('/static', express.static(`${STATIC_URL}/public`));
app.get('/api/todos', (_, req) => {
  req.send([
    { id: 0, name: 'do 0' },
    { id: 1, name: 'do 1' },
    { id: 2, name: 'do 2' },
  ]);
});
app.get('*', render);

export default app;
