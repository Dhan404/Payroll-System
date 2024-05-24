import { Component,OnInit } from '@angular/core';
import { Salary } from '../salary';
import { NgForm } from '@angular/forms';
import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';
import { Message } from '../Message';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {

  salary:Salary=new Salary();
  employeeIds:number[]=[];
  msg:Message=new Message();
  calculateDeduction: boolean = false;
  calculateTaxableIncome: boolean = false;
  calculateMonthlyIncomeTaxNetSalary: boolean = false;

  constructor(private salaryService:SalaryService,private router:Router){}

  ngOnInit():void{
    this.fetchEmployeeIds();
    this.salary = new Salary(); // Initialize the salary object here

    
  }

  onCalculateDeductionChange() {
    if (this.calculateDeduction) {
      // Calculate PF Contribution (10% of Basic Salary)
      this.salary.pfContribution = this.salary.basicSalary * 0.1;
  
      // Calculate SSF Contribution (13% of Basic Salary)
      this.salary.ssfContribution = this.salary.basicSalary * 0.13;
  
      // Assuming Medical Insurance is 5% of Basic Salary
      this.salary.medicalInsurance = this.salary.basicSalary * 0.05;
    } else {
      // Reset the values of PF Contribution, SSF Contribution, and Medical Insurance to 0
      this.salary.pfContribution = 0;
      this.salary.ssfContribution = 0;
      this.salary.medicalInsurance = 0;
    }
  }

  onCalculateTaxableIncomeChange() {
    if (this.calculateTaxableIncome) {
      // Calculate Gross Monthly Salary
      this.salary.grossMonthlySalary = this.salary.basicSalary + this.salary.dearnessAllowance + this.salary.houseRentAllowance;
  
      // Calculate Taxable Monthly Income
      this.salary.taxableMonthlyIncome = this.salary.grossMonthlySalary - (this.salary.pfContribution + this.salary.ssfContribution + this.salary.medicalInsurance);
  
      // Calculate Taxable Annual Income (Assuming 12 months in a year)
      this.salary.taxableAnnualIncome = this.salary.taxableMonthlyIncome * 12;
    } else {
      // Reset the values of Gross Monthly Salary, Taxable Monthly Income, and Taxable Annual Income to 0
      this.salary.grossMonthlySalary = 0;
      this.salary.taxableMonthlyIncome = 0;
      this.salary.taxableAnnualIncome = 0;
    }
  }

  onCalculateMonthlyIncomeTaxNetSalaryChange() {
    if (this.calculateMonthlyIncomeTaxNetSalary) {
      // Calculate Monthly Income Tax (1% of taxable annual income divided by 12)
      this.salary.monthlyIncomeTax = (this.salary.taxableAnnualIncome * 0.01) / 12;
  
      // Calculate Net Monthly Salary (Gross Monthly Salary - Monthly Income Tax)
      this.salary.netMonthlySalary = this.salary.grossMonthlySalary - this.salary.monthlyIncomeTax;
    } else {
      // Reset the values of Monthly Income Tax and Net Monthly Salary to 0
      this.salary.monthlyIncomeTax = 0;
      this.salary.netMonthlySalary = 0;
    }
  }
  
  

  
  

  fetchEmployeeIds(){
    this.salaryService.getEmployeeIds().subscribe(
      (ids:number[])=>{
        this.employeeIds=ids;
      },
      (error)=>{
        console.error('Error fetching employee IDs:',error);
      }
    );
  }

  onEmployeeIdChange(){
    
    if(this.salary.employeeId){
      console.log('Selected Employee ID:', this.salary.employeeId);
      this.salaryService.getEmployeeDetails(this.salary.employeeId).subscribe(
        (employee:any)=>{
          this.salary.firstName=employee.firstName;
          this.salary.lastName=employee.lastName;
          this.salary.email=employee.email;
          this.salary.designation=employee.designation;
          this.salary.maritalStatus=employee.maritalStatus;
          this.salary.basicSalary=employee.basicSalary;
        },
        (error)=>{
          console.error('Error fetching employee details:',error);
        }
      );
    }
  }

  saveSalary(){
    this.salaryService.createSalary(this.salary).subscribe(data=>{
      console.log(data)
      this.goToSalaryList();
    },
    error=>console.log(error)); 
  }

  goToSalaryList(){
    this.router.navigate(['/salaries']);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      // Mark only specific form fields as touched to display validation messages
      form.controls['firstName'].markAsTouched();
      form.controls['lastName'].markAsTouched();
      form.controls['email'].markAsTouched(); // Commented out to not mark email as touched
      return;
    } else {
      this.saveSalary();
    }
  }
  


}
