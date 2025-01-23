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
    curtir(disciplina: Disciplina) {
      disciplina.likes += 1;
    }

    descurtir(disciplina: Disciplina) {
      if (disciplina.likes > 0) {
        disciplina.likes -= 1;
      }
    }

    avaliar(disciplina: Disciplina) {
      disciplina.curti = !disciplina.curti;
    }

    nomeIconeCurtir(disciplina: Disciplina): string {
      if (disciplina.curti === undefined) {
        return 'thumbs_up_down';
      }
      if (disciplina.curti) {
        return 'thumb_up';
      }
      return 'thumb_down';
    }
}
