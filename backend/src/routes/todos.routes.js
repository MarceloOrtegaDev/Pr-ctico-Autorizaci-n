import { Router } from "express";
import { borrarTodos, editarTarea, getAllTodosCtrl, postTodos, tareasXid } from "../controllers/todos.controllers.js";
import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);
todosRouter.get("/:id", validarJwt, tareasXid)
todosRouter.delete("/:id", validarJwt, borrarTodos)
todosRouter.put("/:id", validarJwt, editarTarea)
todosRouter.post("/", validarJwt, postTodos);

export { todosRouter };
