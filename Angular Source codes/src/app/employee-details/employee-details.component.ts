import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number
  employee:Employee
  constructor(private route:ActivatedRoute,private employeeService:EmployeeService){}

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.employee=new Employee();
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee=data;
      })
  }
  printEmployeeDetails() {
    const printContent = document.getElementById('printContent');

    if (printContent) {
      // Store the original value of overflow property of the body
      const originalOverflow = document.body.style.overflow;

      // Hide the header, footer, and print button
      const header = document.getElementsByTagName('header')[0];
      const footer = document.getElementsByTagName('footer')[0];
      const printButton = document.getElementById('printButton');

      if (header) {
        header.style.display = 'none';
      }

      if (footer) {
        footer.style.display = 'none';
      }

      if (printButton) {
        printButton.style.display = 'none';
      }

      // Show only the print content
      const printContentHTML = printContent.innerHTML;
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContentHTML;

      // Set the overflow property of the body to 'visible' to show the entire content in the print view
      document.body.style.overflow = 'visible';

      // Trigger the print dialog
      window.print();

      // Restore the original content and layout
      document.body.innerHTML = originalContent;

      if (header) {
        header.style.display = 'block';
      }

      if (footer) {
        footer.style.display = 'block';
      }

      if (printButton) {
        printButton.style.display = 'block';
      }

      // Restore the original overflow property
      document.body.style.overflow = originalOverflow;
    } else {
      console.error("Element with id 'printContent' not found.");
    }
  }








  // printEmployeeDetails() {
  //   // Show the print view
  //   const printContent = document.getElementById("printContent");
  //   printContent.style.display = "block";

  //   // Trigger the print dialog
  //   window.print();

  //   // Hide the print view after printing
  //   printContent.style.display = "none";
  // }


}
