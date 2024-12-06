import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPrincipalComponent } from './pages-principal.component';

describe('PagesPrincipalComponent', () => {
  let component: PagesPrincipalComponent;
  let fixture: ComponentFixture<PagesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
