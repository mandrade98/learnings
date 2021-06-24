import exoress from 'express';
import cors from 'cors';
import routes from './routes';

const app = exoress();

app.use(cors());
app.use(routes);

app.listen(3333);

