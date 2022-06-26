import { StudentModel } from "../model/StudentModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
  public async insert(student: StudentModel): Promise<any> {
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

  public async getByName(nome:string): Promise<any> {
    try {
      const result = await BaseDatabase.connection("estudante")
        .select("*")
        .where("nome", "like", `%${nome}%`);
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  
  public async changeTeam(estudante_id: string, turma_id: string) {
    try {
      return await BaseDatabase.connection("estudante")
        .update({ turma_id: turma_id })
        .where({ id: estudante_id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}