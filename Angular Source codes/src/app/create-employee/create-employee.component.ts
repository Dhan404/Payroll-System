import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Message } from '../Message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  msg:Message=new Message();
  errorMessage: string = '';
  constructor(private employeeService:EmployeeService,private router:Router){}
  ngOnInit(): void {
      
  }

  // saveEmployee(){
  //   this.employeeService.createEmployee(this.employee).subscribe(data=>{
  //     console.log(data)
  //     this.goToEmployeeList();
  //   },
  //   error=>console.log(error)); 
  // }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      () => {
        console.log('Employee added successfully');
        this.errorMessage = ''; // Clear the error message when employee is successfully created
        this.goToEmployeeList();
      },
      (error) => {
        console.error(error);
        this.errorMessage = error; // Store the error message
      }
    );
  }


  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  // onSubmit(){
   
  //  // console.log(this.employee);
  // //  var myval= this.employeeService.checkEmployeeEmailExists(this.employee.email);
  // //  console.log(myval);

    
  //  this.saveEmployee();
  // }
  onSubmit(form:NgForm){
    if(form.invalid){
      form.controls['firstName'].markAsTouched();
      form.controls['lastName'].markAsTouched();
      form.controls['email'].markAsTouched();
      // form.controls['basicSalary'].markAsTouched();
      return;
    }
    else{
      this.saveEmployee();
    }
   
  }

  doChange(){
    alert(this.employee.email);
  }

}
