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
  private aniversario: string;
  private tipo: TipoContato;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    aniversario: string,
    tipo: TipoContato
  ) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
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

  public getAniversario(): string {
    return this.aniversario;
  }

  public setAniversario(aniversario: string): void {
    this.aniversario = aniversario;
  }

  public getTipo(): TipoContato {
    return this.tipo;
  }

  public setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }
}