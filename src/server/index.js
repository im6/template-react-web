/* eslint no-console: 0 */
import 'regenerator-runtime/runtime';
import app from './app';
import { PORT } from '../constant';

app.listen(PORT, () => {
  console.log(
    `app (mode: ${process.env.NODE_ENV}) is running on: http://localhost:${PORT}`
  );
});
