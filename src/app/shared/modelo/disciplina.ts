export class Disciplina {
  public cod: number;
  public nome: string;

  constructor(cod: number =0, nome: string='') {
    this.cod = cod;
    this.nome = nome;
  }
}
