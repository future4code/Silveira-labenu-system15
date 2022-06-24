import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
  public async insert(student:StudentModel): Promise<any> {
    try {
      await BaseDatabase.connection("estudante").insert({
        id: student.getId(),
        nome: student.getNome(),
        email: student.getEmail(),
        data_nasc: student.getDataNasc(),
        turma_id: student.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  /* 
  public async getAll(): Promise<any> {
    try {
      const result = await BaseDatabase.connection("turma").select("*");
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async changeModule(id: string, modulo: MODULO) {
    try {
      return await BaseDatabase.connection("turma")
        .update({ modulo: modulo })
        .where({ id: id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  } */
}
