import { MODULO } from "../types";

export class StudentsTeamModel {
  constructor(
    private id: string,
    private nome: string,
    private modulo: MODULO
  ) {}
  public getId() {
    return this.id;
  }
  public getNome() {
    return this.nome;
  }
  public setNome(newNome: string) {
    this.nome = newNome;
  }
  public getModulo() {
    return this.modulo;
  }
  public setModulo(newModulo: number) {
    this.modulo = newModulo;
  }
}
