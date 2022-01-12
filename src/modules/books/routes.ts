import { Router } from 'express';

const booksRoutes = Router();
const resource = '/books';

booksRoutes.get(resource, (req, res) => {
  console.log('got here books');
  res.status(201).send({ ok: true });
});

export default booksRoutes;
