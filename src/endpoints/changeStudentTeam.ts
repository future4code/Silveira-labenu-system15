import { Request, Response } from "express";
import { StudentDatabase } from "../data/StudentDatabase";
import { MODULO } from "../types";

export default async function changeStudentTeam(
  req: Request,
  res: Response
):Promise<any> {
  try {
    const estudante_id = req.body.estudante_id;
    const turma_id = req.body.turma_id;

    if (!estudante_id || !turma_id) {
      return res.status(400).send("É necessário informar o ID do estudante e da turma.");
    }

    const studentDB = new StudentDatabase();
    await studentDB.changeTeam(estudante_id, turma_id);
    res.status(200).send("Turma alterada com sucesso");
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
