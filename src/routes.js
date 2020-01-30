import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'Birl' })
})

//routes.get();
//routes.post();
//routes.delete();
//routes.put();

export default routes;