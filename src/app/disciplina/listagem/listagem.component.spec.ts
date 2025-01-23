import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDisciplinaComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemDisciplinaComponent;
  let fixture: ComponentFixture<ListagemDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
