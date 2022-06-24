export enum moduloType {
  zero = 0,
  one = 1,
  two = 2,
  tree = 3,
  four = 4,
  five = 5,
  six = 6,
}

export class StudentsTeamModel {
  constructor(
    private id: string,
    private nome: string,
    private modulo: moduloType
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
