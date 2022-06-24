import { Request, Response } from "express";
import { StudentsTeamDatabase } from "../data/StudentsTeamDatabase";

export default async function getAllStudentsTeams(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const studentsTeamDB = new StudentsTeamDatabase();

    const students = await studentsTeamDB.getAll();

    res.send(students);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
