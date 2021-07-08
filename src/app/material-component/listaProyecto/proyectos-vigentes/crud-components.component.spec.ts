import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponentsComponent } from './crud-components.component';

describe('CrudComponentsComponent', () => {
  let component: CrudComponentsComponent;
  let fixture: ComponentFixture<CrudComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
