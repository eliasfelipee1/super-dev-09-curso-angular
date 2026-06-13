import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCadastrar } from './produto-cadastrar';

describe('ProdutoCadastrar', () => {
  let component: ProdutoCadastrar;
  let fixture: ComponentFixture<ProdutoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
