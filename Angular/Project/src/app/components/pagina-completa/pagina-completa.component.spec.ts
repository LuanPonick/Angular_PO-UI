import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompletaComponent } from './pagina-completa.component';

describe('PaginaCompletaComponent', () => {
  let component: PaginaCompletaComponent;
  let fixture: ComponentFixture<PaginaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCompletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
