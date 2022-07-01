import { TeacherModel } from "../model/TeacherModel";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
  public async insert(teacher: TeacherModel): Promise<any> {
    try {
      await BaseDatabase.connection("docente").insert({
        id: teacher.getId(),
        nome: teacher.getNome(),
        email: teacher.getEmail(),
        data_nasc: teacher.getDataNasc(),
        turma_id: teacher.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAll(): Promise<any> {
    try {
      const result = await BaseDatabase.connection("docente").select("*");
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  
  public async changeTeam(docente_id: string, turma_id: string) {
    try {
      return await BaseDatabase.connection("docente")
        .update({ turma_id: turma_id })
        .where({ id: docente_id });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}