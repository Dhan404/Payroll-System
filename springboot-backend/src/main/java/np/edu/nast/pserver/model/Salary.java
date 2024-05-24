package np.edu.nast.pserver.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="salaries")
public class Salary {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		@Column(name="date_of_salary")
		private LocalDate dateofSalary;
		
		@Column(name="employeeId")
		private long employeeId;
		
		@Column(name="first_name")
		private String firstName;
		
		@Column(name="last_name")
		private String lastName;
		
		@Column(name="email")
		 private String email;
		
		@Column(name="designation")
		private String designation;
		
		@Column(name="marital_status")
		private String maritalStatus;
		
		@Column(name="basic_salary")
		private long basicSalary;
		
		@Column(name="dearness_allowance")
		private long dearnessAllowance;
		
		@Column(name="house_rent_allowance")
		private long houseRentAllowance;
		
		@Column(name="pf_contribution")
		private long pfContribution;
		
		@Column(name="ssf_contribution")
		private long ssfContribution;
		
		@Column(name="medical_insurance")
		private long medicalInsurance;
		
		@Column(name="gross_monthly_salary")
		private long grossMonthlySalary;
		
		@Column(name="taxable_monthly_income")
		private long taxableMonthlyIncome;
		
		@Column(name="taxable_annual_income")
		private long taxableAnnualIncome;
		
		@Column(name="monthly_income_tax")
		private long monthlyIncomeTax;
		
		@Column(name="net_monthly_salary")
		private long netMonthlySalary;
			
		
}
