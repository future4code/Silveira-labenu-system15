import { Request, Response } from "express";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";
import { MODULO } from "../types";

export default async function changeStudentsTeamModule(
  req: Request,
  res: Response
):Promise<any> {
  try {
    const id = req.params.id;
    const modulo = req.body.modulo;

    if (!Object.values(MODULO).includes(modulo)) {
      return res.status(400).send("O módulo tem que ser um número entre 0 e 6");
    }

    const studentsTeamDB = new StudentsTeamDatabase();
    await studentsTeamDB.changeModule(id, modulo);
    res.status(200).send("Módulo editado com sucesso");
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
