import { Router } from "express";
import  UserControllers from "../../controllers/users.controller.js";

const usersController = new UserControllers();
const usersRouter = Router();

usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/mock", usersController.createUserMock);

usersRouter.get("/:uid", usersController.getUserById);
usersRouter.put("/:uid", usersController.updateUser);
usersRouter.delete("/:uid", usersController.deleteUser);

export default usersRouter;