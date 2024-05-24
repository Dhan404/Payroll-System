import { Component } from '@angular/core';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.css']
})

export class SalaryCalculationComponent {
  salaries:Salary[]=[];
  constructor(private salaryService:SalaryService, private router:Router){}
  ngOnInit():void{
   this.getSalary();
  }
  private getSalary(){
    this.salaryService.getSalaryList().subscribe(data=>{
      this.salaries=data;
    });
  }
  salaryDetails(id:number){
    this.router.navigate(['salary-details',id]);
  }

  updateSalary(id:number){
    this.router.navigate(['update-salary',id]);
  }

  deleteSalary(id:number){
    this.salaryService.deleteSalary(id).subscribe(data=>{
      console.log(data);
      this.getSalary();
    })
  }

}
