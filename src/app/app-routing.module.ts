import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";
import { ListagemDisciplinaComponent } from './disciplina/listagem/listagem.component';
import { ManutencaoDisciplinaComponent } from './disciplina/manutencao/manutencao.component';
import { ListagemCadastroDisciplinaComponent } from './disciplina/listagem-cadastro/listagem-cadastro.component';

const routes: Routes = [
  {
    path: 'listagem-alunos',
    component: ListagemComponent
  },
  {
    path: 'cadastro-aluno',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-alunos',
    component: ListagemCadastroComponent
  },
  {
    path: 'listagem-disciplinas',
    component: ListagemDisciplinaComponent
  },
  {
    path: 'cadastro-disciplina',
    component: ManutencaoDisciplinaComponent
  },
  {
    path: 'listagem-cadastro-disciplinas',
    component: ListagemCadastroDisciplinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
