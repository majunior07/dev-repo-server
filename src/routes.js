import { Router } from "express";
import { route } from "express/lib/router";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', HelloController.index);


// RESTFull
// Rota de Listagem é o método GET
// método POST é para criar um novo usuário  
// método PUT é para fazer update
// método DELETE é para apagar
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);


export default routes;


