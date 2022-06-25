import { Request, Response } from "express";
import { TeacherDatabase } from "../data/TeacherDatabase";
import { MODULO } from "../types";

export default async function changeTeacherTeam(
  req: Request,
  res: Response
):Promise<any> {
  try {
    const docente_id = req.body.docente_id;
    const turma_id = req.body.turma_id;

    if (!docente_id || !turma_id) {
      return res.status(400).send("É necessário informar o ID do docente e da turma.");
    }

    const TeacherDB = new TeacherDatabase();
    await TeacherDB.changeTeam(docente_id, turma_id);
    res.status(200).send("Turma alterada com sucesso");
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
