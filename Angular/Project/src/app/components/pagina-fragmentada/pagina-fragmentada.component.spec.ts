import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFragmentadaComponent } from './pagina-fragmentada.component';

describe('PaginaFragmentadaComponent', () => {
  let component: PaginaFragmentadaComponent;
  let fixture: ComponentFixture<PaginaFragmentadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFragmentadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFragmentadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
