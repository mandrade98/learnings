import exoress from 'express';
import routes from './routes';

const app = exoress();

app.use(routes);

app.listen(3333);

