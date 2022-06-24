import { Request, Response } from "express";
import { StudentDatabase } from "../data/StudentDatabase";
import { StudentModel } from "../model/StudentModel";

export default async function createStudent(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, data_nasc, turma_id } = req.body;
    const id = Date.now() + Math.random().toString();

    const student = new StudentModel(
      id,
      nome,
      email,
      data_nasc,
      turma_id
    );

    const studentDB = new StudentDatabase();

    await studentDB.insert(student)

    res.status(201).send('Estudante criado com sucesso');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
