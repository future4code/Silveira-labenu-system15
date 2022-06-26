import { Request, Response } from "express";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";
import { TeacherDatabase } from "../data/TeacherDatabase";
import { TeacherModel } from "../model/TeacherModel";

export default async function createTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id } = req.body;
    const id = Date.now() + Math.random().toString();

    /* Array com o ID de todas as turmas */
    const studentsTeamDB = new StudentsTeamDatabase();
    const studentsTeams = await studentsTeamDB.getAll();

    let StudentsTeamsIds = [];
    for (var studentTeam of studentsTeams) {
      StudentsTeamsIds.push(studentTeam.id);
    }

    if (StudentsTeamsIds.includes(turma_id)) {

    const teacher = new TeacherModel(id, nome, email, data_nasc, turma_id);

    const teacherDB = new TeacherDatabase();

    await teacherDB.insert(teacher);

    res.status(201).send("Docente criado com sucesso");
    } else {
      res
        .status(400)
        .send("Não existe turma cadastrada com o turma_id informado!");
      return;
    }

  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
