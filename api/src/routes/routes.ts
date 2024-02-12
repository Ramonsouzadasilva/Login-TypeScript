import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { SetorController } from "../controllers/SetorController";

const routes = Router();

routes.post("/user", new UserController().create);
routes.post("/login", new UserController().login);

routes.use(authMiddleware);

routes.post("/setores", new SetorController().criar);
routes.get("/setores", new SetorController().listar);
routes.get("/setores/:idSetor", new SetorController().listarPorId);
routes.put("/setores/:idSetor", new SetorController().atualizar);
routes.delete("/setores/:idSetor", new SetorController().remover);

routes.get("/profile", new UserController().getProfile);

export default routes;
