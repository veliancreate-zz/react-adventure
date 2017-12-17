import * as express from 'express';
import * as handlers from './routes';

const app = express();

app.get('/', handlers.main);
app.get('/assets', handlers.assets);

app.listen(8080, () => {
  console.log('server listening on 8080');
});