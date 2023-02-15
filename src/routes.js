import { Router } from "express";
import { route } from "express/lib/router";

import HelloController from "./controllers/HelloController";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', HelloController.index);


// REST
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);

export default routes;


