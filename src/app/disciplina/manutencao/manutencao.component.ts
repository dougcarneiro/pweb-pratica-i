import { Component } from '@angular/core';
import { DISCIPLINAS } from '../../shared/modelo/DISCIPLINAS';
import { Disciplina } from '../../shared/modelo/disciplina';

@Component({
  selector: 'app-manutencao-disciplina',
  standalone: false,

  templateUrl: './manutencao.component.html',
  styleUrl: './manutencao.component.css'
})
export class ManutencaoDisciplinaComponent {

  DISCIPLINAS = DISCIPLINAS;
  disciplinaDeCadastro: Disciplina;

  constructor() {
    this.disciplinaDeCadastro = new Disciplina();
  }

  cadastrar() {
    this.DISCIPLINAS.push(this.disciplinaDeCadastro);
    this.disciplinaDeCadastro = new Disciplina();
  }
}
