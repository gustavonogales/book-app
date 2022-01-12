import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import { routes } from './configs/routes';
import './configs/containers';
import './modules/users/routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
