import { UserModel } from "./UserModel";

export class StudentModel extends UserModel {
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
  ) {
    super(id, nome, email, data_nasc, turma_id);
  }
}
