import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCajaComponent } from './gestion-caja.component';

describe('GestionCajaComponent', () => {
  let component: GestionCajaComponent;
  let fixture: ComponentFixture<GestionCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
