import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEditar } from './produto-editar';

describe('ProdutoEditar', () => {
  let component: ProdutoEditar;
  let fixture: ComponentFixture<ProdutoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
