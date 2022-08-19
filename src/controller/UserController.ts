import { Request, Response } from "express";

import UserModel from "../model/User";

class UserController {
  async create(req: Request, res: Response) {
    const { name, password, email } = req.body;

    const register = new UserModel({
      name,
      password,
      email,
    });

    await register.save();

    res.status(201).json({ message: "Cadastrato com sucesso" });
  }

  async find(req: Request, res: Response) {
    const users = await UserModel.find();
    res.json({ payload: users });
  }
}

export default new UserController();
