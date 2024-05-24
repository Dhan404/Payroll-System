import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryComponent } from './add-salary.component';

describe('AddSalaryComponent', () => {
  let component: AddSalaryComponent;
  let fixture: ComponentFixture<AddSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalaryComponent]
    });
    fixture = TestBed.createComponent(AddSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
