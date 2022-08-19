import { Router } from "express";
import userController from "../controller/UserController";

const routerUser = Router();

routerUser.get("/", userController.find);
routerUser.post("/create", userController.create);

export default routerUser;
