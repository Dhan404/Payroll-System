import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalaryComponent } from './update-salary.component';

describe('UpdateSalaryComponent', () => {
  let component: UpdateSalaryComponent;
  let fixture: ComponentFixture<UpdateSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSalaryComponent]
    });
    fixture = TestBed.createComponent(UpdateSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
