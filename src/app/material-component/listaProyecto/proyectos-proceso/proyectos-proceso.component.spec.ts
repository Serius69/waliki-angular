import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosProcesoComponent } from './proyectos-proceso.component';

describe('ProyectosProcesoComponent', () => {
  let component: ProyectosProcesoComponent;
  let fixture: ComponentFixture<ProyectosProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
