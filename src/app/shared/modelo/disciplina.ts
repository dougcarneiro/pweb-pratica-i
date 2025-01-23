export class Disciplina {
  public cod: number;
  public nome: string;
  public likes: number;
  public curti: boolean | undefined;

  constructor(cod: number =0, nome: string='', likes: number=0, curti: boolean | undefined = undefined) {
    this.cod = cod;
    this.nome = nome;
    this.likes = likes;
    this.curti = curti;
  }
}
