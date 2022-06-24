import { UserModel } from "./UserModel";

export class TeacherModel extends UserModel {
  private especialidades: string[];
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidades: string[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
    this.especialidades = especialidades;
  }
  public geteEpecialidades(): string[] {
    return this.especialidades;
  }
}
