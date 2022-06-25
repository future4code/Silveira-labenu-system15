import { Request, Response } from "express";
import { TeacherDatabase } from "../data/TeacherDatabase";
import { TeacherModel } from "../model/TeacherModel";

export default async function createTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id } = req.body;
    const id = Date.now() + Math.random().toString();

    const teacher = new TeacherModel(id, nome, email, data_nasc, turma_id);

    const teacherDB = new TeacherDatabase();

    await teacherDB.insert(teacher);

    res.status(201).send("Docente criado com sucesso");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
