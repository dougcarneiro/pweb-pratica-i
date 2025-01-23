import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { ListagemDisciplinaComponent } from './listagem/listagem.component';
import { ListagemCadastroDisciplinaComponent } from './listagem-cadastro/listagem-cadastro.component';
import { ManutencaoDisciplinaComponent } from './manutencao/manutencao.component';

@NgModule({
  declarations: [
    ListagemDisciplinaComponent,
    ListagemCadastroDisciplinaComponent,
    ManutencaoDisciplinaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [
    ListagemDisciplinaComponent,
    ManutencaoDisciplinaComponent,
    ListagemCadastroDisciplinaComponent,
  ],
})
export class DisciplinaModule { }
