export class UserModel {
  private id: string;
  private nome: string;
  private email: string;
  private data_nasc: string;
  private turma_id: string;
  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }
  public getId() {
    return this.id;
  }
  public setId(newId:string) {
    this.id = newId;
  }
  public getNome() {
    return this.nome;
  }
  public setNome(newNome:string) {
    this.nome = newNome;
  }
  public getEmail() {
    return this.email;
  }
  public setEmail(newEmail:string) {
    this.email = newEmail;
  }
  public getDataNasc() {
    return this.data_nasc;
  }
  public setDataNasc(newDataNasc:string) {
    this.data_nasc = newDataNasc;
  }
  public getTurmaId() {
    return this.turma_id;
  }
  public setTurmaId(newTurmaId:string) {
    this.turma_id = newTurmaId;
  }
}