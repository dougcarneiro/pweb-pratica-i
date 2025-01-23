import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoDisciplinaComponent } from './manutencao.component';

describe('ManutencaoComponent', () => {
  let component: ManutencaoDisciplinaComponent;
  let fixture: ComponentFixture<ManutencaoDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencaoDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
