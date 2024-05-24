export class Salary {
  id: number;
  dateofSalary:number;
  employeeId: number; // New field to store the selected employee ID
  firstName: string; // Will be populated based on the selected employeeId
  lastName: string; // Will be populated based on the selected employeeId
  email:string;
  designation:string;
  maritalStatus:string;
  basicSalary:number;
  dearnessAllowance:number;
  houseRentAllowance:number;
  pfContribution:number;
  ssfContribution:number;
  medicalInsurance:number;
  grossMonthlySalary:number;
  taxableMonthlyIncome:number;
  taxableAnnualIncome:number;
  monthlyIncomeTax:number;
  netMonthlySalary:number;

}
