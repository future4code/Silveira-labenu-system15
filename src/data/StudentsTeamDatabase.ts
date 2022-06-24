import { StudentsTeamModel } from "../model/StudentsTeamModel";
import { BaseDatabase } from "./BaseDatabase";

export class StudentsTeamDatabase extends BaseDatabase {
  public async insert(studentsTeam: StudentsTeamModel) {
    try {
      await BaseDatabase.connection("turma").insert({
        id: studentsTeam.getId(),
        nome: studentsTeam.getNome(),
        modulo: studentsTeam.getModulo(),
      });
    } catch (error) {
      throw new Error(
        "Erro Inesperado! "/*  +
          ` id: ${studentsTeam.getId()} / nome: ${studentsTeam.getNome()} / docentes: ${studentsTeam.getDocentes()} / estudantes: ${studentsTeam.getEstudantes()} / modulo: ${studentsTeam.getModulo()}` */
      );
    }
  }
}
