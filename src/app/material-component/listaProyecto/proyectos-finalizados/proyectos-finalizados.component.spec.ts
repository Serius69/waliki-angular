import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFinalizadosComponent } from './proyectos-finalizados.component';

describe('ProyectosFinalizadosComponent', () => {
  let component: ProyectosFinalizadosComponent;
  let fixture: ComponentFixture<ProyectosFinalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosFinalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
