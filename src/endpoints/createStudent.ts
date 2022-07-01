import { Request, Response } from "express";
import { StudentDatabase } from "../data/StudentDatabase";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";
import { StudentModel } from "../model/StudentModel";

export default async function createStudent(
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
      const student = new StudentModel(id, nome, email, data_nasc, turma_id);

      const studentDB = new StudentDatabase();

      await studentDB.insert(student);

      res.status(201).send("Estudante criado com sucesso");
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
