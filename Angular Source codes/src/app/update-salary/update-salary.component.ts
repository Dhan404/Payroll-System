import { Component } from '@angular/core';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})
export class UpdateSalaryComponent {
  id:number;
  salary:Salary=new Salary();
  calculateDeduction: boolean = false;
  calculateTaxableIncome: boolean = false;
  calculateMonthlyIncomeTaxNetSalary: boolean = false;
  constructor(
    private salaryService:SalaryService,private route:ActivatedRoute,private router:Router){}

    ngOnInit():void{
      this.id=this.route.snapshot.params['id'];
      this.salaryService.getSalaryById(this.id).subscribe(data=>{this.salary = data;},error=>console.log(error));
    }

    onSubmit(){
      this.salaryService.updateSalary(this.id,this.salary).subscribe(data=>{this.goToSalaryList();
      },error=>console.log(error));
    }
    goToSalaryList(){
      this.router.navigate(['/salaries']);
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
    
}
