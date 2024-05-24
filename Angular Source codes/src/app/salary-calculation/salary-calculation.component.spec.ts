import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCalculationComponent } from './salary-calculation.component';

describe('SalaryCalculationComponent', () => {
  let component: SalaryCalculationComponent;
  let fixture: ComponentFixture<SalaryCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryCalculationComponent]
    });
    fixture = TestBed.createComponent(SalaryCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
