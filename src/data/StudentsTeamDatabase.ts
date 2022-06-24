import { StudentsTeamModel } from "../model/StudentsTeamModel";
import { MODULO } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class StudentsTeamDatabase extends BaseDatabase {
  public async insert(studentsTeam: StudentsTeamModel): Promise<any> {
    try {
      await BaseDatabase.connection("turma").insert({
        id: studentsTeam.getId(),
        nome: studentsTeam.getNome(),
        modulo: studentsTeam.getModulo(),
      });
    } catch (error: any) {}
  }

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
  }
}
