import { Request, Response } from "express";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";
import { TeacherDatabase } from "../data/TeacherDatabase";
import { MODULO } from "../types";

export default async function changeTeacherTeam(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const docente_id = req.body.docente_id;
    const turma_id = req.body.turma_id;

    if (!docente_id || !turma_id) {
      return res
        .status(400)
        .send("É necessário informar o ID do docente e da turma.");
    }

    /* Array com o ID de todas as turmas */
    const studentsTeamDB = new StudentsTeamDatabase();
    const studentsTeams = await studentsTeamDB.getAll();

    let StudentsTeamsIds = [];
    for (var studentTeam of studentsTeams) {
      StudentsTeamsIds.push(studentTeam.id);
    }

    if (StudentsTeamsIds.includes(turma_id)) {
      const TeacherDB = new TeacherDatabase();
      await TeacherDB.changeTeam(docente_id, turma_id);
      res.status(200).send("Turma alterada com sucesso");
    } else {
      res
        .status(400)
        .send("Não existe turma cadastrada com o turma_id informado!");
      return;
    }
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
