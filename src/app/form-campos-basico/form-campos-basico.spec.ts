import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('FormCamposBasico', () => {
  let component: FormCamposBasico;
  let fixture: ComponentFixture<FormCamposBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCamposBasico],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCamposBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
