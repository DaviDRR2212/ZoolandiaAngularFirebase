import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAnimalComponent } from './detalle-animal.component';

describe('DetalleAnimalComponent', () => {
  let component: DetalleAnimalComponent;
  let fixture: ComponentFixture<DetalleAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
