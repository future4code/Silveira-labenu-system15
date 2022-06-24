import { Request, Response } from "express";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";
import { moduloType, StudentsTeamModel } from "../model/StudentsTeamModel";

export default async function createStudentsTeam(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome } = req.body;
    const id = Date.now() + Math.random().toString();
    const modulo = moduloType.zero;

    const studentsTeam = new StudentsTeamModel(
      id,
      nome,
      modulo
    );

    const studentsTeamDB = new StudentsTeamDatabase();

    await studentsTeamDB.insert(studentsTeam);

    res.status(201).send('Turma criada com sucesso');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
