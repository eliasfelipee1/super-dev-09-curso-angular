import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwM3 } from './bmw-m3';


describe('BmwM3', () => {
  let component: BmwM3;
  let fixture: ComponentFixture<BmwM3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmwM3],
    }).compileComponents();

    fixture = TestBed.createComponent(BmwM3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
