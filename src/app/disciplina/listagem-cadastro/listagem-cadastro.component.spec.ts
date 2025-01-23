import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCadastroDisciplinaComponent } from './listagem-cadastro.component';

describe('ListagemCadastroComponent', () => {
  let component: ListagemCadastroDisciplinaComponent;
  let fixture: ComponentFixture<ListagemCadastroDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemCadastroDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCadastroDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
