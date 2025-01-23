import { Component } from '@angular/core';
import { DISCIPLINAS } from '../../shared/modelo/DISCIPLINAS';
import { Disciplina } from '../../shared/modelo/disciplina';

@Component({
  selector: 'app-listagem-disciplina',
  standalone: false,

  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemDisciplinaComponent {
  DISCIPLINAS = DISCIPLINAS;

  constructor() {
  }

  remover(disciplinaARemover: Disciplina) {
    this.DISCIPLINAS = this.DISCIPLINAS.filter(
        disciplina => disciplina.cod !== disciplinaARemover.cod);
  }
}
