export enum TipoContato {
  AMIGO = 'Amigo(a)',
  FAMILIA = 'Família',
  TRABALHO = 'Trabalho',
  OUTRO = 'Outro'
}

export class Contato {

  private nome: string;
  private telefone: string;
  private email: string;
  private nascimento: string;
  private tipo: TipoContato;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    nascimento: string,
    tipo: TipoContato
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.nascimento = nascimento;
    this.tipo = tipo;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getNascimento(): string {
    return this.nascimento;
  }

  public setNascimento(nascimento: string): void {
    this.nascimento = nascimento;
  }

  public getTipo(): TipoContato {
    return this.tipo;
  }

  public setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }
}