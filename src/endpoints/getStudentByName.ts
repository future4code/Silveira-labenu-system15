import { Request, Response } from "express";
import { StudentDatabase } from "../data/StudentDatabase";
import { StudentModel } from "../model/StudentModel";

export default async function getStudentByName(
  req: Request,
  res: Response
): Promise<void> {
  try {
    
    const nome = req.query.nome as string;

    if(!nome){
      res.statusCode = 400;
      throw new Error("Preencha o parâmetro nome");
    }

    const studentDB = new StudentDatabase();

    const student = await studentDB.getByName(nome);

    if (!student) {
      res.status(404).send([]);
      return;
    }

    res.send(student);


  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
