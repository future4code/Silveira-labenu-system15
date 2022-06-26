import { Request, Response } from "express";
import { TeacherDatabase } from "../data/TeacherDatabase";

export default async function getAllTeachers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const TeacherDB = new TeacherDatabase();
    const teacher = await TeacherDB.getAll();

    res.send(teacher);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
